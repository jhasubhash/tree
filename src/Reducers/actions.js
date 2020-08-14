import Store from './store';

export const ActionType = {
	RESIZE: 'RESIZE',
	SET_ACTIVE_NODE: 'SET_ACTIVE_NODE',
	SET_DATA: 'SET_DATA',
	SET_FILTER: 'SET_FILTER',
	SET_FONT_SIZE: 'SET_FONT_SIZE',
	SET_FONT_COLOR: 'SET_FONT_COLOR',
	SET_LINK_COLOR: 'SET_LINK_COLOR',
	SET_LINK_OPACITY: 'SET_LINK_OPACITY',
	SET_FONT_FAMILY: 'SET_FONT_FAMILY',
	SET_NODE_SHAPE: 'SET_NODE_SHAPE'
};

export function resize() {
	Store.dispatch({
		type: ActionType.RESIZE
	});
}

export function setActiveNode(node) {
	Store.dispatch({
		type: ActionType.SET_ACTIVE_NODE,
		node: node
	});
}

export function setFilter(filter) {
	Store.dispatch({
		type: ActionType.SET_FILTER,
		filter: filter
	});
}
export function setFontSize(size) {
	Store.dispatch({
		type: ActionType.SET_FONT_SIZE,
		size: size
	});
}

export function setFontColor(color) {
	Store.dispatch({
		type: ActionType.SET_FONT_COLOR,
		color: color
	});
}
export function setLinkColor(color) {
	Store.dispatch({
		type: ActionType.SET_LINK_COLOR,
		color: color
	});
}
export function setLinkOpacity(opacity) {
	Store.dispatch({
		type: ActionType.SET_LINK_OPACITY,
		size: opacity
	});
}
export function setFontFamily(family) {
	Store.dispatch({
		type: ActionType.SET_FONT_FAMILY,
		family: family
	});
}
export function setNodeShape(shape) {
	Store.dispatch({
		type: ActionType.SET_NODE_SHAPE,
		shape: shape
	});
}
