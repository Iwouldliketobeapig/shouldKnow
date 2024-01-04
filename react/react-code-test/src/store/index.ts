import { combineReducers } from 'redux';
import count from './reducer/count';
import list from './reducer/list';

export type State = {
  count: number;
  list: string[];
}

export default combineReducers({
  count,
  list,
});