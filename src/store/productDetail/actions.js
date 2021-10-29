import constants from './constants';

const getProductDetail = (payload) => ({
  type: `${constants.NS_PRODUCT_DETAIL}/${constants.GET_PRODUCT_DETAIL}`,
  payload,
});

const setProductDetail = (payload) => ({
  type: `${constants.SET_PRODUCT_DETAIL}`,
  payload,
});

export default { getProductDetail };
