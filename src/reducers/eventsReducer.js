import { FETCH_EVENTS, FETCH_EVENT, EXIT_EVENT, JOIN_EVENT, CREATE_EVENT } from '../actions/types';

const initialState = {
	items: [],
	item: {},
	newItem: {}	
}

export default function(state = initialState, action) {

	switch(action.type) {
		case FETCH_EVENTS:			
			return {
				...state,
				items: action.payload
			}
		case FETCH_EVENT:
			return {
				...state,
				item: action.payload
			}
		case EXIT_EVENT:
			
			return {
				...state,
				item: action.payload
			}
		case JOIN_EVENT:
			
			return {
				...state,
				item: action.payload
			}
		case CREATE_EVENT:
			return {
				...state,
				newItem: action.payload
			}
		default:
			return state;

	}
}