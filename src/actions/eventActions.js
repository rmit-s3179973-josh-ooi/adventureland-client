import { FETCH_EVENTS, FETCH_EVENT, EXIT_EVENT, JOIN_EVENT, CREATE_EVENT } from './types';
import axios from 'axios';
import { sessionService } from 'redux-react-session';

import {URL} from './url';

export const fetchEvents = () => dispatch => {
	axios({
		url: URL+'/api/events',
		method: 'GET'
	}).then((response) =>{
	    	
	        dispatch({
	        	type: FETCH_EVENTS,
	        	payload: response.data
	        });
	    })
	    .catch( (error) => {
	    	console.log(error);
	    });
}

export const fetchEvent = (id) => dispatch => {
	axios({
		url:URL+'/api/events/'+id,
		method:'GET'		
	}).then((response) => {

			dispatch({
				type: FETCH_EVENT,
				payload: response.data
			});
		}).catch(err => console.log(err));
}

export const exitEvent = (id) => dispatch => {
	
	sessionService.loadSession().then((response) => {
		
		axios({
			url: URL+'/api/events/'+id+'/exit',
			method: 'POST',
			headers:{
				'Authorization': response.token_type + ' ' + response.access_token,
				'Accept': 'application/json',				
			}
				
		})
		.then((response) => {

			dispatch({
				type: EXIT_EVENT,
				payload: response.data
			});
		}).catch(err => console.log(err));

	});
}

export const joinEvent = (id) => dispatch => {
	
	sessionService.loadSession().then((response) => {
		
		axios({
			url: URL+'/api/events/'+id+'/join',
			method: 'POST',
			headers:{
				'Authorization': response.token_type + ' ' + response.access_token,
				'Accept': 'application/json',				
			}	
		})
		.then((response) => {

			dispatch({
				type: JOIN_EVENT,
				payload: response.data
			});
		}).catch(err => console.log(err));

	});
}

export const createEvent = (values, history) => dispatch => {
	
	sessionService.loadSession().then((response) => {
		
		axios({
			url: URL + '/api/events/new',
			method: 'POST',
			headers:{
				'Authorization': response.token_type + ' ' + response.access_token,
				'Accept': 'application/json'			
			},
			data: values
		})
		.then((response) => {

			dispatch({
				type: CREATE_EVENT,
				payload: response.data.event
			});
			
			history.push('/');
		}).catch(err => console.log(err));

	});
}