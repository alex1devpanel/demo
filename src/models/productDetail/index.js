import constants from '@/store/productDetail/constants';
import state from '@/store/productDetail/state';
import effects from '@/store/productDetail/effects';
import reducers from '@/store/productDetail/reducers';

export default {
  namespace: constants.NS_PRODUCT_DETAIL,
  state,
  effects,
  reducers,
};
