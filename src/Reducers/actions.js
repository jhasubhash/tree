import Store from './store';

export const ActionType = {
	RESIZE: 'RESIZE',
	SET_ACTIVE_NODE: 'SET_ACTIVE_NODE',
	SET_DATA: 'SET_DATA',
	SET_FILTER: 'SET_FILTER',
	ZOOM: 'ZOOM',
	PAN: 'PAN',
	RESET_VIEW: 'RESET_VIEW'
};

export function resize() {
	Store.dispatch({
		type: ActionType.RESIZE
	});
}

export function zoom(x, y, scale) {
	Store.dispatch({
		type: ActionType.ZOOM,
		zoomX: x,
		zoomY: y,
		scale: scale
	});
}

export function pan(x, y) {
	Store.dispatch({
		type: ActionType.PAN,
		panX: x,
		panY: y
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

export function resetView(){
	Store.dispatch({
		type: ActionType.RESET_VIEW
	});
}