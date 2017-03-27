import { combineReducers } from 'redux';

import flashMessages from './flashMessagesReducer';
import modal from './modalReducer';
import searchBar from './searchBarReducer';

export default combineReducers({
  flashMessages, 
  modal,
  searchBar
});
