import clone from 'clone';
import PropTypes from 'prop-types';
import React from 'react';
import Tree from 'react-tree-graph';
import { setFilter, setActiveNode } from '../Reducers/actions';
import { zoom, zoomIdentity, zoomTransform } from 'd3-zoom';
import { select, event, selectAll } from 'd3-selection';
import { contextMenu, Menu, Item , theme, animation} from 'react-contexify';
import MenuDialog from './MenuDialog'
import * as qs from 'query-string';

import 'react-contexify/dist/ReactContexify.min.css';
import PreferenceMgr from '../js/PreferenceMgr';

const propTypes = {
	activeNode: PropTypes.string,
	data: PropTypes.object,
	filter: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number
};

const menuId = 'adminMenu';

const AdminMenu = ({ menuId, onClickCb, editMode }) => (
	<div>
	{editMode &&
		<Menu id={menuId} theme={theme.dark} animation={animation.zoom}>
			<Item onClick={() => onClickCb('Primary')}>
			Rename
			</Item>
			<Item onClick={() => onClickCb('Partner')}>
			Rename Partner
			</Item>
			<Item onClick={() => onClickCb('Children')}>
			Add/Remove Children
			</Item>
			<Item onClick={() => onClickCb('Remove')}>
			Remove Person
			</Item>
			<Item onClick={() => onClickCb('EditInfo')}>
			Add/Edit Info
			</Item>
		</Menu>
	}
	{ !editMode &&
		<Menu id={menuId} theme={theme.dark} animation={animation.zoom}>
			<Item onClick={() => onClickCb('Info')}>
				Get More Info
			</Item>
		</Menu>
	}
	</div>
);

export default class TreeContainer extends React.PureComponent {
	constructor(props){
		super(props);
		this.data = props.data;
		this.state = {
			key:0,
			currentNode:undefined,
			editNode: undefined,
			menuDialog: false,
			dialogId: undefined
		}
		this.closeNode = new Set();
		this.hiddenNode = new Set();
		this.populateCloseSet(this.data);
	}

	zoomed = () => {
		selectAll('g').filter(function() {
		  return !this.classList.contains('node')
		}).attr("transform", event.transform);
	}

	componentDidMount(){
		this.zoom = zoom().on("zoom", this.zoomed)
		selectAll('svg').filter(function() {
		  return !this.classList.contains('MuiSvgIcon-root')
		}).call(this.zoom)
		  .on("dblclick.zoom", null);
		this.props.setZoomRef(this.zoom);
		if(this.props.qStr){
			const parsed = qs.parse(this.props.qStr);
			if(parsed.name)
			setFilter(parsed.name);
			if(parsed.theme)
			PreferenceMgr.setActiveTheme(parsed.theme);
		}
	}

	populateCloseSet(node){
		this.closeNode.add(node.id);
		if(node.children)
		for(let i=0; i< node.children.length; i++)
		this.populateCloseSet(node.children[i]);
	}

	resetCloseSet(node){
		if(this.closeNode.has(node.id))
		this.closeNode.delete(node.id);
		if(node.children)
		for(let i=0; i< node.children.length; i++)
		this.resetCloseSet(node.children[i]);
	}

	handleClick = (event, node) => {
		event.preventDefault();
		this.setState({ currentNode: node });
		setFilter('');
	}

	handleRightClick = (ev, node) => {
		ev.preventDefault();
		this.setState({ editNode: node });
		contextMenu.show({id: menuId, event: ev });
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

		if (cnt > 0 || root.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) === 0
		||(root.partner && root.partner.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) === 0)) {
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

	onMenuDialogClose = (changed)=>{
		this.setState({ menuDialog: false });
	}

	adminMenuCb = (id) => {
		this.setState({ menuDialog: true, dialogId:id});
	}

	render() {
		if(this.props.activeNode === '0'){
			setActiveNode(null);
			this.populateCloseSet(this.data)
		}
		if(this.props.activeNode === 'all'){
			setActiveNode(null);
			this.resetCloseSet(this.data)
		}
		let root = this.data;
		root = clone(root);

		if (this.props.filter) {
			root = this.buildSubTree(root) || root;
		}

		this.setClassName(root);

		return (
			<div>
			<AdminMenu menuId={menuId} onClickCb={this.adminMenuCb} editMode={this.props.editMode}/>
			{this.state.menuDialog && 
			<MenuDialog dialogId={this.state.dialogId} 
							nodeId={this.state.editNode} 
							data={this.data} 
							onClose={this.onMenuDialogClose}
							getNextPerson={this.props.getNextPerson}/>}

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
					onClick: this.handleClick,
					onContextMenu: this.handleRightClick
				}}
				nodeShape={this.props.nodeShape}
				nodeProps={{r:2, stroke: this.props.linkColor, fill: this.props.linkColor}}
				svgProps={{
					viewBox: 0+" "+0+" "+this.props.width+" "+this.props.height
				}}
				textProps={{fontSize:this.props.fontSize, fill:this.props.fontColor, fontFamily:this.props.fontFamily}}
				pathProps={{stroke:this.props.linkColor, strokeOpacity:this.props.linkOpacity}}
				steps={30}/>
				</div>
			);
				
	}
}

TreeContainer.propTypes = propTypes;