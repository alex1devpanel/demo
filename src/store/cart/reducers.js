import constants from './constants';

const reducers = {
  [constants.ADD_PRODUCT_TO_CART](state, { payload }) {
    return state.set('listSelectedProduct', payload);
  },
  [constants.RESET_CART](state) {
    return state.set('listSelectedProduct', []);
  },
};

export default reducers;
