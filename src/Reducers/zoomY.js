import $ from 'jquery';
import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return $(window).height() - 25;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.ZOOM:
				return action.zoomY;
            case ActionType.RESET_VIEW:
                return $(window).height() - 25;
		}
	}
	return state;
}