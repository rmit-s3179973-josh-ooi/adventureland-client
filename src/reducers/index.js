import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import categoryReducer from './categoryReducer';
import eventsReducer  from './eventsReducer';

export default combineReducers({
	categories: categoryReducer,
	session: sessionReducer,
	events: eventsReducer
})
