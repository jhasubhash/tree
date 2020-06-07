import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return 0;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.PAN:
				return action.panX;
			case ActionType.RESET_VIEW:
				return 0;
		}
	}

	return state;
}