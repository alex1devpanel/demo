import constants from './constants';

const reducers = {
  [constants.SET_LIST_CATEGORIES](state, { payload }) {
    return state.set('listCategories', payload);
  },
  [constants.SET_LIST_PRODUCT](state, { payload }) {
    return state.set('listProducts', payload);
  },
};

export default reducers;
