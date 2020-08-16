import ActiveNode from './activeNode';
import Filter from './filter';
import Height from './height';
import Width from './width';
import ServiceWorker from './serviceWorker';

import {FontSize, FontColor, LinkColor, LinkOpacity, FontFamily, NodeShape} from './preferences';

import { combineReducers, createStore } from 'redux';

export default createStore(
	combineReducers({
		activeNode: ActiveNode,
		filter: Filter,
		height: Height,
		width: Width,
		fontSize: FontSize,
		fontColor: FontColor,
		linkColor: LinkColor,
		linkOpacity: LinkOpacity,
		fontFamily: FontFamily,
		nodeShape: NodeShape,
		serviceWorker: ServiceWorker,
	}),
	{
		serviceWorkerInitialized: false,
		serviceWorkerUpdated: false,
		serviceWorkerRegistration: null,
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);