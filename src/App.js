import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import Header from './Components/header';
import TreeContainer from './Components/treeContainer';
import json from './json';
import { connect } from 'react-redux';
import { resize, zoom, pan } from './Reducers/actions';

import './style.css';

$(window).on('resize', resize);

let scale = 1;
let vx = 0;
let vy = 0;

window.resetGlobal = function(){
  scale = 1;
  vx = 0;
  vy = 0;
};

const propTypes = {
	activeNode: PropTypes.string,
	filter: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  panX: PropTypes.number.isRequired,
  panY: PropTypes.number.isRequired,
  zoomX: PropTypes.number.isRequired,
  zoomY: PropTypes.number.isRequired
};

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.id = 0;
    this.treeContainerRef = React.createRef();
    this.json = this.addIdToNode(json);
    this.addParent(this.json);
    this.addIdToPartner(this.json);
    this.enableDrag = false;
    this.lastPos = {x:0,y:0};
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

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel, { passive: false });
    window.addEventListener('mousedown', this.startDrag, { passive: false });
    window.addEventListener('mousemove', this.handleDrag, { passive: false });
    window.addEventListener('mouseup', this.stopDrag, { passive: false });
    window.addEventListener('touchstart', this.touchStartHandler, { passive: false });
    window.addEventListener('touchmove', this.touchMoveHandler, { passive: false });
    window.addEventListener('touchend', this.touchEndHandler, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel, { passive: false });
    window.removeEventListener('mousedown', this.startDrag, { passive: false });
    window.removeEventListener('mousemove', this.handleDrag, { passive: false });
    window.removeEventListener('mouseup', this.stopDrag, { passive: false });
    window.removeEventListener('touchstart', this.touchStartHandler, { passive: false });
    window.removeEventListener('touchmove', this.touchMoveHandler, { passive: false });
    window.removeEventListener('touchend', this.touchEndHandler, { passive: false });
  }

  componentWillReceiveProps(nProps){
    if(this.props.height !== nProps.height ||this.props.width !== nProps.width)
      zoom(nProps.width/scale, nProps.height/scale, scale);
  }

  touchStartHandler = (event) =>{
    this.enableDrag = true;
    this.lastPos = {x:event.touches[0].clientX, y:event.touches[0].clientY};
  }

  touchMoveHandler = (event) =>{
    event.preventDefault();
    if(!this.enableDrag)return;
    vx += this.lastPos.x - event.touches[0].clientX ;
    vy += this.lastPos.y - event.touches[0].clientY;
    this.lastPos = {x:event.touches[0].clientX, y:event.touches[0].clientY};
    pan(vx, vy);
  }

  touchEndHandler = (event) =>{
    this.enableDrag = false;
  }
  
  startDrag = (event) => {
    this.enableDrag = true;
    this.lastPos = {x:window.event.clientX, y:window.event.clientY};
  }
  stopDrag = (event) => {
    this.enableDrag = false;
  }

  handleDrag = (event) => {
    event.preventDefault();
    if(!this.enableDrag)return;
    vx += this.lastPos.x - window.event.clientX ;
    vy += this.lastPos.y - window.event.clientY;
    this.lastPos = {x:window.event.clientX, y:window.event.clientY};
    pan(vx, vy);
  }

  handleWheel = (event) => {
    event.preventDefault();
    if (event.ctrlKey) {
      scale += event.deltaY * -0.01;
      // Restrict scale
      scale = Math.min(Math.max(.125, scale), 4);
      zoom(this.props.width/scale, this.props.height/scale, scale);
    }else{
      // console.log(event.deltaX+" "+event.deltaY)
      vx += event.deltaX;///scale;
      vy += event.deltaY;///scale;
      pan(vx, vy);
    }
    event.stopPropagation()
  }
  
	render() {
		return (
			<div id="container" >
				<Header filter={this.props.filter} timestamp={json.timestamp}/>
				<TreeContainer
					activeNode={this.props.activeNode}
					data={this.json}
					filter={this.props.filter}
					height={this.props.height}
					width={this.props.width}
          panX={this.props.panX}
          panY={this.props.panY}
          zoomX={this.props.zoomX}
          zoomY={this.props.zoomY}/>
			</div>);
	}
}

App.propTypes = propTypes;
export default App = connect(state => state)(App);
