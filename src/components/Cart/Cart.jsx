import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Popover, List, Image, Button } from 'antd';
import { connect } from 'dva';

const Cart = ({ listSelectedProduct }) => {
  const content = (
    <>
      <List
        dataSource={listSelectedProduct}
        bordered
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
        <Button disabled={listSelectedProduct.length === 0}>Thanh Toán</Button>
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

const mapStateToProps = ({ cart }) => {
  return {
    listSelectedProduct: cart.toJS().listSelectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
