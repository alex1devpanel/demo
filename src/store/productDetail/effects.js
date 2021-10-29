import actions from './actions';
import constants from './constants';
import { getProductDetailService } from '@/services/ant-design-pro/productDetail';

const effects = {
  *[constants.GET_PRODUCT_DETAIL]({ payload }, { call, put }) {
    try {
      const response = yield call(getProductDetailService, payload);
      yield put(actions.setProductDetail(response));
    } catch (e) {
      console.log(e);
    }
  },
};

export default effects;
