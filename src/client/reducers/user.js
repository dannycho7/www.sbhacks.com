import * as actionTypes from "../constants/actionTypes";

const initialState = {
	isAuthenticated: false,
	applicationFields: null,
	info: null
};

const userReducer = (state = initialState, action) => {
	switch(action.type) {
	case actionTypes.AUTH_SUCCESS: {
		let { applicationFields, info } = action;
		return { ...state, isAuthenticated: true, applicationFields, info };
	}
	case actionTypes.UPDATE_SUCCESS:
	case actionTypes.APPLY_SUCCESS: {
		let { applicationFields } = action;
		return { ...state, applicationFields };
	}
	case actionTypes.LOG_OUT_SUCCESS: {
		return { isAuthenticated: false, applicationFields: null, info: null };
	}
	case actionTypes.RSVP: {
		return { ...state, applicationFields: { ...state.applicationFields, ...action.payload } };
	}
	case actionTypes.CANCEL_RSVP: {
		return { ...state, applicationFields: { ...state.applicationFields, ...action.payload } };
	}
	default:
		return state;
	}
};


module.exports = userReducer;
