import React from 'react';
import { Menu } from 'antd';

const ListMenu = ({ listCategories, selectedMenuKey, setSelectedMenuKey }) => {
  return (
    <Menu
      onClick={({ key }) => setSelectedMenuKey(key)}
      selectedKeys={[selectedMenuKey]}
      mode="horizontal"
    >
      {(listCategories || []).map((item) => (
        <Menu.Item key={item.key}>{item.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default ListMenu;
