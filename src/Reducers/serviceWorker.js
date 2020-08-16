import { ActionType } from './actions';

export default function(state, action) {
	if (typeof state === 'undefined') {
		return null;
	} else {
		switch (action.type) {
			case ActionType.SW_INIT:
                return {
                    serviceWorkerInitialized: true,
                  };
            case ActionType.SW_UPDATE:
                return {
                    serviceWorkerUpdated: true,
                    serviceWorkerRegistration: action.payload,
                  };
            default:
                return state;
		}
	}
}