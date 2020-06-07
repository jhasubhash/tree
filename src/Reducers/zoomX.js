import $ from 'jquery';
import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return $(window).width();
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.ZOOM:
                return action.zoomX;
            case ActionType.RESET_VIEW:
                return $(window).width();
		}
	}
	return state;
}