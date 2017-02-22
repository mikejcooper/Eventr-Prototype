import { combineReducers } from 'redux';

import flashMessages from './flashMessagesReducer';
import modal from './modalReducer';

export default combineReducers({
  flashMessages, 
  modal
});
