import { request } from 'umi';

export async function getListCategoriesService(options) {
  return request('/api/category/get-all', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function getListProductsService(params, options) {
  return request('/api/product/get-all', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}
