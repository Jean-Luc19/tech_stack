import { combineReducers } from 'redux';
import libraries from './LibraryReducer';
import selection from './selection_reducer';

export default combineReducers({
  libraries,
  selection
});
