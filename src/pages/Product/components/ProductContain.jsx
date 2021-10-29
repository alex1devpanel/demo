import React from 'react';
import { Card, message, Row, Col } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductContain = ({
  history,
  listProducts,
  listSelectedProduct,
  triggerRender,
  setTriggerRender,
  onAddProductToCart,
}) => {
  const handleAddProduct = (selectedProductKey) => {
    const selectedProduct = listProducts.find((item) => item.key === selectedProductKey);
    if (listSelectedProduct.filter((item) => item.key === selectedProductKey).length === 0) {
      listSelectedProduct.push({ ...selectedProduct, quatity: 1 });
    } else {
      const index = listSelectedProduct.findIndex((item) => item.key === selectedProductKey);
      listSelectedProduct[index].quatity += 1;
    }
    onAddProductToCart(listSelectedProduct);
    message.success(`Thêm ${selectedProduct.name} vào giỏ hàng thành công`);
    setTriggerRender(!triggerRender);
  };
  return (
    <Row gutter={16}>
      {(listProducts || []).map((item) => (
        <Col lg={4} md={8} sm={24} key={item.key}>
          <Card
            hoverable
            style={{ width: 240 }}
            actions={[
              <ShoppingCartOutlined key="Cart" onClick={() => handleAddProduct(item.key)} />,
              <HeartOutlined
                key="bookmark"
                onClick={() => history.push(`/product-detail?id=${item.key}`)}
              />,
            ]}
            cover={<img alt="example" src={item.url} />}
          >
            <Meta
              title={item.name}
              description={
                <>
                  <div>{item.shortDescription}</div>
                  <div style={{ fontWeight: 'bold' }}>Price : {item.price}$</div>
                </>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductContain;
