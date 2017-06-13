import { GET_EVENT_DATA } from './types';
import axios from "axios";


export function getEventData(eventId) {

  return function(dispatch) {
    var meta = new Object();
    var headers = new Object();
    headers.id = eventId;
    meta = {
      params : headers
    }
    axios.get("http://localhost:4000/api/events/",meta)
      .then((response) => {
        // let tags = response.data.tags.split(',');
        dispatch({ type: GET_EVENT_DATA, payload: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }
}