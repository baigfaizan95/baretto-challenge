import { combineReducers } from 'redux';
import posts from './posts';
import loading from './loading';
import error from './error';

const appReducer = combineReducers({
  posts,
  error,
  loading
});

export default appReducer;
