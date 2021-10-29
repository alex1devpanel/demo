import React from 'react';
import { List, Image, Form, Input } from 'antd';

const ModalPayment = ({ listSelectedProduct }) => {
  return (
    <>
      <List
        dataSource={listSelectedProduct}
        style={{ maxHeight: '300px', overflow: 'auto' }}
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
          <List.Item>
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
      <Form.Item
        label="Tên người nhận"
        rules={[{ required: true, message: 'Vui lòng nhập thông tin' }]}
        name="name"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        rules={[{ required: true, message: 'Vui lòng nhập thông tin' }]}
        name="phoneNumber"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Địa chỉ nhận hàng"
        rules={[{ required: true, message: 'Vui lòng nhập thông tin' }]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Ghi chú" name="note">
        <Input.TextArea placeholder="input placeholder" />
      </Form.Item>
    </>
  );
};

export default ModalPayment;
