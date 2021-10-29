import { createSelector } from 'reselect';
import constants from './constants';

const productManagement = (state) => state[constants.NS_PRODUCT];

const makeSelector = (name) => {
  return createSelector(productManagement, (state) => {
    console.log(state);
    return state.toJS()[name];
  });
};

export { makeSelector };
