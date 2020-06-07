import ActiveNode from './activeNode';
import Filter from './filter';
import Height from './height';
import Width from './width';
import PanX from './panX';
import PanY from './panY';
import ZoomX from './zoomX';
import ZoomY from './zoomY';
import { combineReducers, createStore } from 'redux';

export default createStore(
	combineReducers({
		activeNode: ActiveNode,
		filter: Filter,
		height: Height,
		width: Width,
		panX: PanX,
		panY: PanY,
		zoomX: ZoomX,
		zoomY: ZoomY
	}),
	undefined,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);