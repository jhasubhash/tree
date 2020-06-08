import PropTypes from 'prop-types';
import React from 'react';
import Filter from './filter';
import { setActiveNode, setFilter, resize, resetView } from '../Reducers/actions';

const propTypes = {
	filter: PropTypes.string.isRequired,
	timestamp: PropTypes.string
};

export default class Header extends React.PureComponent {
	componentDidMount() {
		resize();
	}

	handleClick() {
		setActiveNode('0');
		setFilter('');
		resetView();
		window.resetGlobal();
	}

	render() {
		return (
			<div id="header">
				<Filter filter={this.props.filter}/>
				<button onClick={this.handleClick}>Reset</button>
				{false && <span>Last Updated: {this.props.timestamp}</span>}
			</div>);
	}
}

Header.propTypes = propTypes;