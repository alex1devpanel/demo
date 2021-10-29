import {
  getListCategoriesService,
  getListProductsService,
} from '@/services/ant-design-pro/product';
import actions from './actions';
import constants from './constants';

const effects = {
  *[constants.GET_LIST_CATEGORIES](_, { call, put }) {
    try {
      const response = yield call(getListCategoriesService);
      yield put(actions.setListCategories(response));
    } catch (e) {
      console.log(e);
    }
  },
  *[constants.GET_LIST_PRODUCT]({ payload }, { call, put }) {
    try {
      const response = yield call(getListProductsService, payload);
      yield put(actions.setListProducts(response));
    } catch (e) {
      console.log(e);
    }
  },
};

export default effects;
