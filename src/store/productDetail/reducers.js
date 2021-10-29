import constants from './constants';

const reducers = {
  [constants.SET_PRODUCT_DETAIL](state, { payload }) {
    return state.set('productData', payload);
  },
};

export default reducers;
