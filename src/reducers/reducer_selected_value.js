import * as types from '../actions/ActionTypes';

export default function activeValue(state = null, action) {
  switch (action.type) {
    case types.SELECTED_VALUE:
      return action.value;
    default:
      return state;
  }
}
