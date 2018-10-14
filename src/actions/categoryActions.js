import { FETCH_CATEGORY } from './types';
import axios from 'axios';
import {URL} from './url';

export const fetchCategories = () => dispatch => {
		
		axios({
			url: URL+'/api/categories',
			method: 'GET'
		}).then((response) =>{
        	
	        dispatch({
	        	type: FETCH_CATEGORY,
	        	payload: response.data
	        })
        })
        .catch( (error) => {
        console.log(error);
        }); 
	
}