function createPayment(req, res, u, b) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  return res.json({ isSuccess: true });
}

export default {
  'POST /api/cart/create': createPayment,
};
