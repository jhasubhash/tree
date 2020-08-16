import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import Header from './Components/header';
import TreeContainer from './Components/treeContainer';
import localJson from './json';
import { connect } from 'react-redux';
import { resize } from './Reducers/actions';
import { zoom, zoomIdentity, zoomTransform } from 'd3-zoom'
import { select, event, selectAll } from 'd3-selection'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
import ReactGA from 'react-ga';

import DB from './js/Database';
import PreferenceMgr from './js/PreferenceMgr';

import './style.css';
import './App.css';

$(window).on('resize', resize);

const propTypes = {
	activeNode: PropTypes.string,
	filter: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  fontColor: PropTypes.string.isRequired,
  linkColor: PropTypes.string.isRequired,
  linkOpacity: PropTypes.number.isRequired,
  fontFamily: PropTypes.string.isRequired,
  nodeShape: PropTypes.string.isRequired
};


const prefersDarkMode = 1;//useMediaQuery('(prefers-color-scheme: dark)');

function initializeReactGA() {
  ReactGA.initialize('UA-175515238-1');
  ReactGA.pageview(window.location.pathname);
}

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.id = 0;
    this.treeContainerRef = React.createRef();
    this.state = {
      editMode : false,
      json : {},
      treeCred : "abc123",
    }
    this.theme = createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: blue,
      },
    })
  }

  addIdToPartner(node){
    if(!node.partner)
      node.partner = {name:""};
    node.partner.id = (this.id++).toString();
    if(node.children && node.children.length){
      for(let i=0; i<node.children.length; i++){
        this.addIdToPartner(node.children[i]);
      }
    }
  }

  addParent(node){
    if(node.children && node.children.length){
      for(let i=0; i<node.children.length; i++){
        node.children[i].parent = node.id;
        this.addParent(node.children[i]);
      }
    }
  }

  addIdToNode(root){
		if(!root) return root;
    root.id = (this.id++).toString();
		if(root.children && root.children.length > 0)
			for (let i = 0; i < root.children.length; i++) {
				this.addIdToNode(root.children[i]);
			}
		return root;
  }

  getNextPerson = ()=>{
    let nxt = {};
    nxt.name = "New Child";
    nxt.id = (this.id++).toString();
    nxt.children = [];
    nxt.partner = {name:""};
    return nxt;
  }

  setZoomRef = (zoomRef)=>{
    this.zoom = zoomRef;
  }

  reset = () => {
    selectAll('svg').call(this.zoom.transform, zoomIdentity);
  }

  wheeled = () => {
    event.preventDefault();
    selectAll('g').filter(function() {
      return !this.classList.contains('node')
    }).each(function(){
      this.setAttribute("transform", event.transform)
    });
  }

  processTreeData = (jsonData)=>{
    if(!jsonData || !Object.keys(jsonData).length)
      jsonData = localJson;
    jsonData = this.addIdToNode(jsonData);
    this.addParent(jsonData);
    this.addIdToPartner(jsonData);
    this.setState({ json: jsonData });
  }

  processTreeCred = (json) => {
    this.setState({ treeCred: json.pass });
  }

  componentDidMount() {
    //initialize database
    PreferenceMgr.initPreferenceMgr();
    DB.initDatabase();
    DB.getTreeData().then((json)=>{
      this.processTreeData(json);
    });
    DB.getTreeCred().then((json)=>{
      this.processTreeCred(json);
    });
    //init tracking
    initializeReactGA();
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nProps){
  }

  setEditMode = (mode)=>{
    this.setState({ editMode: mode });
  }

  saveTree = ()=>{
    console.log(this.state.json);
    DB.save(this.state.json).then(()=>{
      console.log("Tree Data successfully written!");
      this.setEditMode(false);
    })
    .catch(function(error) {
        console.error("Error writing Tree Data : ", error);
    });
  }

	render() {
		return (
      <ThemeProvider theme={this.theme}>
			<div id="container" >
        <Header {...this.props}
          treeCred = {this.state.treeCred}
          resetView={this.reset}
          editMode={this.state.editMode}
          setEditMode={this.setEditMode}
          saveTree={this.saveTree}/>
				{Object.keys(this.state.json).length && <TreeContainer
					{...this.props}
					data={this.state.json}
          editMode={this.state.editMode}
          setZoomRef={this.setZoomRef}
          getNextPerson={this.getNextPerson}/>}
			</div>
    </ThemeProvider>);
	}
}

App.propTypes = propTypes;
export default App = connect(state => state)(App);
