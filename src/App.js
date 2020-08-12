import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import Header from './Components/header';
import TreeContainer from './Components/treeContainer';
import json from './json';
import { connect } from 'react-redux';
import { resize } from './Reducers/actions';
import { zoom, zoomIdentity, zoomTransform } from 'd3-zoom'
import { select, event, selectAll } from 'd3-selection'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';

import './style.css';
import './App.css';

$(window).on('resize', resize);

const propTypes = {
	activeNode: PropTypes.string,
	filter: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};


const prefersDarkMode = 1;//useMediaQuery('(prefers-color-scheme: dark)');

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.id = 0;
    this.treeContainerRef = React.createRef();
    this.json = this.addIdToNode(json);
    this.addParent(this.json);
    this.addIdToPartner(this.json);
    this.state = {
      editMode : false
    }
    this.theme = createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: blue,
      },
    })
  }

  addIdToPartner(node){
    if(node.partner)
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


  zoomed = () => {
    selectAll('g').filter(function() {
      return !this.classList.contains('node')
    }).attr("transform", event.transform);
  }

  reset = () => {
    select('svg').call(this.zoom.transform, zoomIdentity);
  }

  wheeled = () => {
    event.preventDefault();
    selectAll('g').filter(function() {
      return !this.classList.contains('node')
    }).each(function(){
      /*let current_transform = zoomTransform(this);
      if (event.ctrlKey) {
          current_transform.k = current_transform.k - event.deltaY * 0.01;
      } else {
          current_transform.y = current_transform.y - event.deltaY;
      }*/
      this.setAttribute("transform", event.transform)
    });
  }

  componentDidMount() {
    this.zoom = zoom().on("zoom", this.zoomed)
    select('svg').call(this.zoom)
      .on("dblclick.zoom", null)
    //.on("wheel.zoom", this.wheeled);
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nProps){
    //if(this.props.height !== nProps.height ||this.props.width !== nProps.width)
    //  zoom(nProps.width/scale, nProps.height/scale, scale);
  }

  setEditMode = (mode)=>{
    this.reset();
    this.setState({ editMode: mode });
  }

	render() {
		return (
      <ThemeProvider theme={this.theme}>
			<div id="container" >
        <Header filter={this.props.filter} 
          resetView={this.reset}
          editMode={this.state.editMode}
          setEditMode={this.setEditMode}/>
				<TreeContainer
					activeNode={this.props.activeNode}
					data={this.json}
					filter={this.props.filter}
					height={this.props.height}
					width={this.props.width}
          editMode={this.state.editMode}/>
			</div>
    </ThemeProvider>);
	}
}

App.propTypes = propTypes;
export default App = connect(state => state)(App);
