import constants from '@/store/product/constants';
import state from '@/store/product/state';
import effects from '@/store/product/effects';
import reducers from '@/store/product/reducers';

export default {
  namespace: constants.NS_PRODUCT,
  state,
  effects,
  reducers,
};
