import * as types from './ActionTypes';

export function selectedValue(value) {
  return {
    type: types.SELECTED_VALUE,
    value,
  };
};
