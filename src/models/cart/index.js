import constants from '@/store/cart/constants';
import state from '@/store/cart/state';
import effects from '@/store/cart/effects';
import reducers from '@/store/cart/reducers';

export default {
  namespace: constants.NS_CART,
  state,
  effects,
  reducers,
};
