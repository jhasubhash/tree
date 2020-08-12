import PropTypes from 'prop-types';
import React from 'react';
import Filter from './filter';
import ThemeSwitch from './themeSwitch'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { setActiveNode, setFilter, resize } from '../Reducers/actions';
import ListView from './ListView';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
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
	handleSave = ()=>{
		console.log("tree is saved");
	}
	handleCancel = ()=>{
		this.props.setEditMode(false);
	}
	render() {
		return (
			<div id="header">
				<div style={{float: 'left', paddingTop: '0%'}}>
				<ListView editMode={this.props.editMode} setEditMode={this.props.setEditMode} handleSaveTree={this.handleSave}/>
				</div>
				<Filter filter={this.props.filter}/>
				<Button onClick={this.handleClick} 
						variant="contained" 
						color="primary"
						style={{ maxHeight: '25px', minHeight: '25px', fontSize: '11px' }}
						size="small" >Reset</Button>
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
				{false && <div style={{float: 'right'}}><ThemeSwitch/></div>}
			</div>);
	}
}

Header.propTypes = propTypes;