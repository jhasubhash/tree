import { ActionType } from './actions';
import PreferenceMgr from '../js/PreferenceMgr';

export function FontSize(state, action) {
	if (typeof state === 'undefined') {
		return PreferenceMgr.getPreferences().fontSize;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.SET_FONT_SIZE:
				return action.size;
		}
	}
	return state;
}

export function FontFamily(state, action) {
	if (typeof state === 'undefined') {
		return PreferenceMgr.getPreferences().fontFamily;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.SET_FONT_FAMILY:
				return action.family;
		}
	}
	return state;
}

export function FontColor(state, action) {
	if (typeof state === 'undefined') {
		return PreferenceMgr.getPreferences().fontColor;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.SET_FONT_COLOR:
				return action.color;
		}
	}
	return state;
}

export function LinkColor(state, action) {
	if (typeof state === 'undefined') {
		return PreferenceMgr.getPreferences().linkColor;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.SET_LINK_COLOR:
				return action.color;
		}
	}
	return state;
}

export function LinkOpacity(state, action) {
	if (typeof state === 'undefined') {
		return PreferenceMgr.getPreferences().linkOpacity;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.SET_LINK_OPACITY:
				return action.opacity;
		}
	}
	return state;
}

export function NodeShape(state, action) {
	if (typeof state === 'undefined') {
		return PreferenceMgr.getPreferences().nodeShape;
	} else {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case ActionType.SET_NODE_SHAPE:
				return action.shape;
		}
	}
	return state;
}