import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Popover, List, Image, Button } from 'antd';

const Cart = ({ listSelectedProduct, setModalProps, modalProps }) => {
  const content = (
    <>
      <List
        dataSource={listSelectedProduct}
        bordered
        style={{ maxHeight: '300px', overflow: 'auto' }}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold' }}>
            <div>Tổng cộng :</div>
            {listSelectedProduct.reduce((defaultNumber, data) => {
              return `${parseInt(defaultNumber) + parseInt(data.price * data.quatity)} $`;
            }, 0)}
          </div>
        }
        renderItem={(item) => (
          <List.Item style={{ width: '500px' }}>
            <List.Item.Meta
              avatar={<Image width={100} src={item.url} />}
              description={
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>{item.name}</div>
                  <div>{item.quatity}</div>
                  <div style={{ fontWeight: 'bold' }}>{item.price * item.quatity} $</div>
                </div>
              }
            />
          </List.Item>
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          disabled={listSelectedProduct.length === 0}
          onClick={() => setModalProps({ ...modalProps, visible: true })}
        >
          Thanh Toán
        </Button>
      </div>
    </>
  );
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Badge count={listSelectedProduct.length}>
        <Popover content={content} title="Sản phẩm mới thêm">
          <ShoppingCartOutlined style={{ fontSize: '32px' }} />
        </Popover>
      </Badge>
    </div>
  );
};

export default Cart;
