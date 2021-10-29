import constants from './constants';

const getListCategories = () => ({
  type: `${constants.NS_PRODUCT}/${constants.GET_LIST_CATEGORIES}`,
});

const setListCategories = (payload) => ({
  type: `${constants.SET_LIST_CATEGORIES}`,
  payload,
});

const getListProducts = (payload) => ({
  type: `${constants.NS_PRODUCT}/${constants.GET_LIST_PRODUCT}`,
  payload,
});

const setListProducts = (payload) => ({
  type: `${constants.SET_LIST_PRODUCT}`,
  payload,
});

export default { getListCategories, setListCategories, getListProducts, setListProducts };
