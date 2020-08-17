import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import Header from './Components/header';
import Footer from './Components/footer';
import TreeContainer from './Components/treeContainer';
import localJson from './json';
import { connect } from 'react-redux';
import { resize } from './Reducers/actions';
import { zoom, zoomIdentity, zoomTransform } from 'd3-zoom'
import { select, event, selectAll } from 'd3-selection'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import blue from '@material-ui/core/colors/blue';
import ReactGA from 'react-ga';
import ServiceWorkerView from './Components/ServiceWorkerView';
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
  nodeShape: PropTypes.string.isRequired,
  serviceWorker: PropTypes.object
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
      superEditMode : false,
      json : {},
      treeCred : "abc123",
      treeSuperCred : "",
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

  getMaxIdAllocated(root){
    if(!root) return 0;
    let id = Math.max(0, root.id);
    for(let i=0; i<root.children.length; i++){
        id = Math.max(id, this.getMaxIdAllocated(root.children[i]));
    }
    return id;
  }

  getNextPerson = ()=>{
    let nxt = {};
    nxt.name = "New Child";
    nxt.id = (this.id++).toString();
    nxt.children = [];
    nxt.partner = {name:"", id:(this.id++).toString()};
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
    //jsonData = this.addIdToNode(jsonData);
    //this.addParent(jsonData);
    //this.addIdToPartner(jsonData);
    this.id = this.getMaxIdAllocated(jsonData)+1;
    console.log("next Id available: "+this.id);
    this.setState({ json: jsonData });
    
    //start fetching user Info in background
    DB.getAllUserInfo(this.id-1).then(() => {
      console.log("All UserInfo fetched")
    });
  }

  processTreeCred = (json) => {
    this.setState({ treeCred: json.pass, treeSuperCred: json.superPass });
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

  setSuperEditMode = (mode)=>{
    this.setState({ superEditMode: mode });
  }

  saveTree = (cb)=>{
    DB.save(this.state.json).then(()=>{
      console.log("Tree Data successfully written!");
      this.setEditMode(false);
      if(cb)
      cb(true);
    })
    .catch(function(error) {
        console.error("Error writing Tree Data : ", error);
        if(cb)
        cb(false);
    });
  }

  saveTreeBackup = (cb)=>{
    DB.saveBackup(this.state.json).then(()=>{
      console.log("Backup successfully written!");
      cb(true);
    })
    .catch(function(error) {
        console.error("Error writing Backup: ", error);
        cb(false);
    });
  }

	render() {
		return (
      <ThemeProvider theme={this.theme}>
      <SnackbarProvider maxSnack={1} 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}>
      {(this.props.serviceWorker 
      && (this.props.serviceWorker.serviceWorkerUpdated||this.props.serviceWorker.serviceWorkerInitialized)) 
      && <ServiceWorkerView {...this.props}/>}
			<div id="container" >
        <Header {...this.props}
          treeCred = {this.state.treeCred}
          treeSuperCred = {this.state.treeSuperCred}
          resetView={this.reset}
          editMode={this.state.editMode}
          setEditMode={this.setEditMode}
          setSuperEditMode={this.setSuperEditMode}
          saveTree={this.saveTree}/>
				{Object.keys(this.state.json).length && <TreeContainer
					{...this.props}
					data={this.state.json}
          editMode={this.state.editMode}
          setZoomRef={this.setZoomRef}
          getNextPerson={this.getNextPerson}/>}
        <Footer {...this.props} 
          editMode={this.state.editMode}
          superEditMode={this.state.superEditMode} 
          saveTreeBackup={this.saveTreeBackup}/>
			</div>
      </SnackbarProvider>
    </ThemeProvider>);
	}
}

App.propTypes = propTypes;
export default App = connect(state => state)(App);
