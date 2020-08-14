import PropTypes from 'prop-types';
import React from 'react';
import Filter from './filter';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { setActiveNode, setFilter, resize } from '../Reducers/actions';
import ListView from './ListView';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import AcUnitIcon from '@material-ui/icons/AcUnit';
const propTypes = {
	filter: PropTypes.string.isRequired,
	resetView: PropTypes.func,
	timestamp: PropTypes.string
};

export default class Header extends React.PureComponent {
	componentDidMount() {
		resize();
	}

	handleClick = ()=>{
		this.props.resetView();
		setActiveNode('0');
		setFilter('');
	}

	handleExpand = ()=>{
		this.props.resetView();
		setActiveNode('all');
		setFilter('');
	}

	handleSave = ()=>{
		this.props.saveTree();
	}
	
	handleCancel = ()=>{
		this.props.setEditMode(false);
	}
	render() {
		return (
			<div id="header">
				<div style={{float: 'left', paddingTop: '0%'}}>
				<ListView {...this.props} handleSaveTree={this.handleSave}/>
				</div>
				<Filter filter={this.props.filter}/>
				<Button onClick={this.handleClick} 
						variant="contained" 
						color="primary"
						style={{ maxHeight: '25px', minHeight: '25px', fontSize: '11px' }}
						size="small" >Reset</Button>
				&nbsp;
				{!this.props.editMode &&<IconButton onClick={this.handleExpand} 
						variant="contained" 
						color="primary"
						style={{ maxHeight: '25px', minHeight: '25px', fontSize: '11px' }}
						size="small" ><AcUnitIcon/></IconButton>}
				{this.props.editMode && <IconButton onClick={this.handleSave} 
						variant="contained" 
						color="primary"
						style={{ maxHeight: '25px', minHeight: '25px', fontSize: '11px', float: 'right' }}
						size="small" ><SaveIcon/></IconButton>}<div style={{float: 'right' }}>&nbsp;</div>
				{this.props.editMode && <IconButton onClick={this.handleCancel} 
						variant="contained" 
						color="primary"
						style={{ maxHeight: '25px', minHeight: '25px', fontSize: '11px', float: 'right' }}
						size="small" ><CloseIcon/></IconButton>}
			</div>);
	}
}

Header.propTypes = propTypes;