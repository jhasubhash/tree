import clone from 'clone';
import PropTypes from 'prop-types';
import React from 'react';
import Tree from 'react-tree-graph';
import { setFilter, setActiveNode, resetView } from '../Reducers/actions';

const propTypes = {
	activeNode: PropTypes.string,
	data: PropTypes.object,
	filter: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number
};

export default class TreeContainer extends React.PureComponent {
	constructor(props){
		super(props);
		this.data = props.data;
		this.state = {
			key:0,
			currentNode:undefined
		}
		this.closeNode = new Set();
		this.hiddenNode = new Set();
		this.populateCloseSet(this.data);
	}

	populateCloseSet(node){
		this.closeNode.add(node.id);
		if(node.children)
		for(let i=0; i< node.children.length; i++)
		this.populateCloseSet(node.children[i]);
	}

	handleClick = (event, node) => {
		this.setState({ currentNode: node });
		setFilter('');
		// resetView();
		// window.resetGlobal();
	}

	getRoot(json, nodeId) {
		if (json.id === nodeId) {
			return json;
		}
		for (let i = 0; i < json.children.length; i++) {
			let childJson = this.getRoot(json.children[i], nodeId);
			if (childJson) {
				return childJson;
			}
		}
		return false;
	}

	buildSubTree(root) {
		let cnt = 0;
		for (let i = 0; i < root.children.length; i++) {
			if (this.buildSubTree(root.children[i])) {
				cnt++;
			}
		}

		if (cnt > 0 || root.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) === 0) {
			if(this.closeNode.has(root.id))
				this.closeNode.delete(root.id);
			return root;
		}
		this.closeNode.add(root.id);
		return null;
	}

	setClassName(node) {
		node.children.forEach(this.setClassName, this);

		if (!this.props.filter) {
			return;
		}

		node.className = node.name.toLowerCase().indexOf(this.props.filter) === -1
			? 'node searchExcluded'
			: 'node searchIncluded';
	}

	pathCB = (event, sourceNodeId, targetNodeId)=>{
		console.log(event);
		console.log(sourceNodeId);
		console.log(targetNodeId);
	}

	getChildren = (node) => {
		let children = undefined;
		if(!node.id) return node.children;
		/*if(this.props.filter && !this.state.currentNode) 
			children = node.children;*/
		if(this.state.currentNode === node.id){
			this.state.currentNode = undefined;
			if(this.closeNode.has(node.id)){
				this.closeNode.delete(node.id);
				children = node.children;
			} else {
				this.closeNode.add(node.id);
				node.children = undefined;
				children = undefined;
			}
		}
		else if(this.closeNode.has(node.id))
			children = undefined;
		else
			children = node.children;
		return children;
	}

	render() {
		if(this.props.activeNode === '0'){
			setActiveNode(null);
			this.populateCloseSet(this.data)
		}
		let root = this.data;
		root = clone(root);

		if (this.props.filter) {
			root = this.buildSubTree(root) || root;
		}

		this.setClassName(root);

		return (
			<Tree
				animated
				data={root}
				width={this.props.width}
				height={this.props.height}
				keyProp={"id"}
				getChildren={this.getChildren}
				margins={{bottom : 10, left : 20, right : 100, top : 10}}
				gProps={{
					className: 'node',
					onClick: this.handleClick
				}}
				svgProps={{
					viewBox: this.props.panX+" "+this.props.panY+" "+this.props.zoomX+" "+this.props.zoomY
				}}
				steps={30}/>);
	}
}

TreeContainer.propTypes = propTypes;