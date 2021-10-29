import { request } from 'umi';

export async function createPaymentService(body, options) {
  return request('/api/cart/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
