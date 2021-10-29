import constants from './constants';

const addProductToCart = (payload) => ({
  type: `${constants.NS_CART}/${constants.ADD_PRODUCT_TO_CART}`,
  payload,
});

const createPayment = (dispatch) => (payload) => {
  return new Promise((resolve) =>
    dispatch({
      type: `${constants.NS_CART}/${constants.CREATE_PAYMENT}`,
      payload,
      resolve,
    }),
  );
};

const resetCart = () => ({
  type: `${constants.NS_CART}/${constants.RESET_CART}`,
});
export default {
  addProductToCart,
  createPayment,
  resetCart,
};
