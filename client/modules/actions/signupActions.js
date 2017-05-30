import axios from 'axios';
import {FETCH_SIGNUP_REQUEST, SIGNIN_SUCESS, SIGNIN_NOT_SUCESS} from './types';


export function userSignupRequest(userData) {
  return dispatch => {
		axios.post("http://localhost:4000/api/users",{ first_name: userData.first_name, last_name : userData.last_name, email: userData.email, hashed_password: userData.password}, )
		.then((response) => {
			dispatch({type: FETCH_SIGNUP_REQUEST, payload: response});
		})
		.catch((err) => {
			// dispatch({type: FETCH_EVENTS_FULFILLED, payload: events});
			console.log(err);
		});
		

		//removal causes problem with .then in  SignupForm -> remove .then?
    return axios.post('/api/users', userData);
  }
}


export function userSignInRequest(username, password) {
  return dispatch => {
		axios.post("http://localhost:4000/api/users/login",{ username: username, hashed_password : password}, )
		.then((response) => {
			var success = response.data[ Object.keys( response.data ) ]
			if(success != 0){
				dispatch({type: SIGNIN_SUCESS, payload: {username, password} });
			} else {
				dispatch({type: SIGNIN_NOT_SUCESS, payload: {username, password} });
			}
		})
		.catch((err) => {
			// dispatch({type: FETCH_EVENTS_FULFILLED, payload: events});
			console.log(err);
		});
		

  }
}