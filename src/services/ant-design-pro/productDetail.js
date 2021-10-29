import { request } from 'umi';

export async function getProductDetailService(params, options) {
  return request('/api/product/get-detail', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}
