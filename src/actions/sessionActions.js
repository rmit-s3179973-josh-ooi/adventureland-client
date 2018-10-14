import { sessionService } from 'redux-react-session';
import axios from 'axios';

import {URL} from './url';

export const login = (credentials) => {
		axios.post(URL+'/api/login', credentials)
		.then((response) => {
			const { access_token, token_type } = response.data;
			
			sessionService.saveSession({ access_token, token_type})
			.then(() => {				
				sessionService.saveUser(response.data.user)
				.then( () =>{
					
				}).catch(err => console.log(err));
			}).catch(err => console.log(err));
		});	
};


export const logout = (history) => {
	sessionService.deleteSession();
    return sessionService.deleteUser().then(()=> {
		history.push('/login');    	
	});
    

};

export const register = (credentials) => {
	
	axios.post(URL+'/api/register', credentials)
		.then((response) => {
			const { access_token, token_type } = response.data;
			
			sessionService.saveSession({ access_token, token_type})
			.then(() => {				
				sessionService.saveUser(response.data.user)
				.then( () =>{
					
				}).catch(err => console.log(err));
			}).catch(err => console.log(err));
		});	
};

