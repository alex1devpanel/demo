export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/product',
    name: 'product',
    icon: 'smile',
    component: './Product',
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    icon: 'smile',
    component: './ProductDetail',
    hideInMenu: true,
  },
  {
    path: '/',
    redirect: '/product',
  },
  {
    component: './404',
  },
];
