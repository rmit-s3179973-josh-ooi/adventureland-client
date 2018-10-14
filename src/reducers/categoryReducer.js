import { FETCH_CATEGORY } from '../actions/types';

const initialState = {
	items: []
}

export default function(state = initialState, action) {

	switch(action.type) {
		case FETCH_CATEGORY:
			return {
				...state,
				items: action.payload
			}
		default:
			return state;

	}
}