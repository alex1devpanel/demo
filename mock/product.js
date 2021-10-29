import moment from 'moment';

const ListCategoriesName = [
  'Tất cả',
  'Đồ chơi',
  'Đồ điện tử',
  'Quần áo',
  'Giày',
  'Phụ kiện',
  'Thú nuôi',
  'Điện thoại',
  'Máy ảnh',
  'Thực phẩm',
];

const genListCategories = (current, pageSize) => {
  const tableListDataSource = [];

  for (let i = 0; i < pageSize; i += 1) {
    tableListDataSource.push({
      key: i,
      name: ListCategoriesName[i],
      status: Math.floor(Math.random() * 10) % 4,
      updatedAt: moment().format('YYYY-MM-DD'),
      createdAt: moment().format('YYYY-MM-DD'),
    });
  }

  return tableListDataSource;
};

function getListCategories(req, res, u) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  return res.json(genListCategories(1, 10));
}

const genListProduct = (current, pageSize) => {
  const tableListDataSource = [];

  for (let i = 0; i < pageSize; i += 1) {
    tableListDataSource.push({
      key: i,
      name: `Sản phẩm ${i}`,
      status: Math.floor(Math.random() * 10) % 4,
      updatedAt: moment().format('YYYY-MM-DD'),
      createdAt: moment().format('YYYY-MM-DD'),
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/200`,
      shortDescription: 'Lorem Generator is a tool to generate Lorem Ipsum placeholder text ',
      fullDescription:
        'Lorem Generator is a tool to generate Lorem Ipsum placeholder textLorem Generator is a tool to generate Lorem Ipsum placeholder textLorem Generator is a tool to generate Lorem Ipsum placeholder textLorem Generator is a tool to generate Lorem Ipsum placeholder text',
      price: Math.floor(Math.random(1, 1000) * 1000),
    });
  }

  return tableListDataSource;
};

const listResult = genListProduct(1, 100);

function getListProduct(req, res, u) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const dummyData = genListProduct(1, 100);

  const { current = 1, pageSize = 18 } = req.query;

  let dataSource = [...dummyData].slice((current - 1) * pageSize, current * pageSize);

  return res.json(dataSource);
}

function getProductDetail(req, res, u) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  let dataSource = listResult[0];

  return res.json(dataSource);
}

export default {
  'GET /api/category/get-all': getListCategories,
  'GET /api/product/get-all': getListProduct,
  'GET /api/product/get-detail': getProductDetail,
};
