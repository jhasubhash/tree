import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import Header from './Components/header';
import TreeContainer from './Components/treeContainer';
import json from './json';
import { connect } from 'react-redux';
import { resize } from './Reducers/actions';

import './style.css';

$(window).on('resize', resize);

const propTypes = {
	activeNode: PropTypes.string,
	filter: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired
};

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.id = 0;
    this.json = this.addKeys(json);
    this.addParent(this.json);
  }

  addParent(node){
    if(node.children && node.children.length){
      for(let i=0; i<node.children.length; i++){
        node.children[i].parent = node.id;
        this.addParent(node.children[i]);
      }
    }
  }

  addKeys(root){
		if(!root) return root;
		root.id = (this.id++).toString();
		if(root.children && root.children.length > 0)
			for (let i = 0; i < root.children.length; i++) {
				this.addKeys(root.children[i]);
			}
		return root;
  }
  
	render() {
		return (
			<div id="container">
				<Header filter={this.props.filter} timestamp={json.timestamp}/>
				<TreeContainer
					activeNode={this.props.activeNode}
					data={this.json}
					filter={this.props.filter}
					height={this.props.height}
					width={this.props.width}/>
			</div>);
	}
}

App.propTypes = propTypes;
export default App = connect(state => state)(App);
