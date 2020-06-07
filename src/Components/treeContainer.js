import clone from 'clone';
import PropTypes from 'prop-types';
import React from 'react';
import Tree from 'react-tree-graph';
import { setActiveNode, resetView } from '../Reducers/actions';

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
		// this.parsePartner(this.data);
	}

	handleClick(event, node) {
		setActiveNode(node);
		resetView();
		window.resetGlobal();
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

	setActiveStyle(node){
		/*resetStyle(this.lastActiveNode);
		node.pathProps = {className: 'activelink'};
		node.textProps = */
	}

	getParent(node) {
		if(node.parent){
			let parent = this.getRoot(this.data, node.parent);
			/*let idx = 0;
			let mid = Math.floor(parent.children.length/2);
			for(; idx< parent.children.length; idx++)
				if(parent.children[idx].id === node.id) break;
			if(!(!(parent.children.length%2) && idx === mid-1))
			[parent.children[idx],parent.children[mid]] = [parent.children[mid],parent.children[idx]];*/
			return parent;
		}
		return node;
	}

	buildSubTree(root) {
		let newChildren = [];

		for (let i = 0; i < root.children.length; i++) {
			let child = this.buildSubTree(root.children[i]);
			if (child) {
				newChildren.push(child);
			}
		}

		if (newChildren.length > 0) {
			root.children = newChildren;
		}

		if (newChildren.length > 0 || root.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1) {
			return root;
		}
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

	computePath(){
		return 'M';
	}
	parsePartner(node){
		//node.textProps= {x: 0, y: 0, transform:"rotate(90)"};
		if(node.partner){
			node.name += "\n "+node.partner.name;
		  //let partner = node.partner;
		  // partner.pathProps = {className: 'partnerLink'};//{onFocus: this.pathCB};
		  // partner.pathFunc = this.computePath;
		  //partner.children = [];
		  // partner.svgProps = {x:0, y:0};
		  //node.children.push(partner);
		}
		if(node.children && node.children.length){
		  for(let i=0; i<node.children.length; i++){
			this.parsePartner(node.children[i]);
		  }
		}
	}

	pathCB = (event, sourceNodeId, targetNodeId)=>{
		console.log(event);
		console.log(sourceNodeId);
		console.log(targetNodeId);
	}

	render() {
		let root = this.props.activeNode ? this.getRoot(this.data, this.props.activeNode) : this.data;
		// this.setActiveStyle(root);
		root = this.getParent(root);
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