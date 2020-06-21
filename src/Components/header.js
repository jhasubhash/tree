import PropTypes from 'prop-types';
import React from 'react';
import Filter from './filter';
import Button from '@material-ui/core/Button';
import { setActiveNode, setFilter, resize } from '../Reducers/actions';

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

	render() {
		return (
			<div id="header">
				<Filter filter={this.props.filter}/>
				<Button onClick={this.handleClick} 
						variant="contained" 
						color="primary"
						style={{ maxHeight: '25px', minHeight: '25px', fontSize: '11px' }}
						size="small" >Reset</Button>
			</div>);
	}
}

Header.propTypes = propTypes;