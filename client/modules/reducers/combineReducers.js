import { combineReducers } from 'redux';

import flashMessages from './flashMessagesReducer';
import modal from './modalReducer';
import searchBar from './searchBarReducer';
import user from './signUserReducer'
import event from './eventReducer'

export default combineReducers({
  flashMessages, 
  modal,
  searchBar,
  user,
  event,
});
