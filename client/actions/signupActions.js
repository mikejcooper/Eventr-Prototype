import axios from 'axios';
import {FETCH_SIGNUP_REQUEST} from './types';


export function userSignupRequest(userData) {
  return dispatch => {
		axios.post("http://localhost:4000/api/users",{ first_name: userData.first_name, last_name : userData.last_name, email: userData.email, hashed_password: userData.password}, )
		.then((response) => {
			console.log("fetching FETCH_SIGNUP_REQUEST");
			console.log(response)
			dispatch({type: FETCH_SIGNUP_REQUEST, payload: response});
		})
		.catch((err) => {
			// dispatch({type: FETCH_EVENTS_FULFILLED, payload: events});
			console.log(err);
		});
		
		console.log("END FETCH_SIGNUP_REQUEST");

		//removal causes problem with .then in  SignupForm -> remove .then?
    return axios.post('/api/users', userData);
  }
}
