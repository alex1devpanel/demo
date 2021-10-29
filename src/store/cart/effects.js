import constants from './constants';
import { createPaymentService } from '@/services/ant-design-pro/cart';

const effects = {
  *[constants.CREATE_PAYMENT]({ payload, resolve }, { call }) {
    try {
      yield call(createPaymentService, payload);
      resolve({ isSuccess: true });
    } catch (e) {
      console.log(e);
    }
  },
};

export default effects;
