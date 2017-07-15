import { combineReducers } from 'redux';
import activeValue from './reducer_selected_value'
import data from './reducer_data';

const reducer = combineReducers({
  activeValue,
  data,
});

export default reducer;
