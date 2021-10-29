import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import ListMenu from './components/Menu';
import ProductContain from './components/ProductContain';
import { connect } from 'dva';
import actions from '@/store/product/actions';
import cartActions from '@/store/cart/actions';
import { Modal, Form, message } from 'antd';
import ModalPayment from './components/ModalPayment';

const Product = ({
  history,
  onGetListCategories,
  listProducts,
  listCategories,
  onGetListProducts,
  listSelectedProduct,
  onAddProductToCart,
  onCreatePayment,
  onResetCart,
}) => {
  const [selectedMenuKey, setSelectedMenuKey] = useState(0);
  const [modalProps, setModalProps] = useState({
    visible: false,
  });
  const [triggerRender, setTriggerRender] = useState(undefined);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [formPayment] = Form.useForm();

  useEffect(() => {
    onGetListCategories();
  }, [onGetListCategories]);

  useEffect(() => {
    onGetListProducts({ category: selectedMenuKey });
  }, [selectedMenuKey, onGetListProducts]);

  const handleClosePayment = () => {
    setModalProps({
      ...modalProps,
      visible: false,
    });
    formPayment.resetFields();
  };

  const onSubmitForm = () => {
    setPaymentLoading(true);
    onCreatePayment({
      ...formPayment.getFieldsValue(),
      listSelectedProduct,
    });
    setTimeout(() => {
      handleClosePayment();
      onResetCart();
      setPaymentLoading(false);
      message.success('Đặt đơn hàng thành công');
    }, 500);
  };

  return (
    <>
      <Cart
        listSelectedProduct={listSelectedProduct}
        modalProps={modalProps}
        setModalProps={setModalProps}
      />
      <ListMenu
        listCategories={listCategories}
        selectedMenuKey={selectedMenuKey}
        setSelectedMenuKey={setSelectedMenuKey}
      />
      <ProductContain
        listProducts={listProducts}
        listSelectedProduct={listSelectedProduct}
        triggerRender={triggerRender}
        setTriggerRender={setTriggerRender}
        history={history}
        onAddProductToCart={onAddProductToCart}
      />
      <Modal
        title="Thông tin thanh toán"
        visible={modalProps.visible}
        destroyOnClose
        maskClosable
        onCancel={handleClosePayment}
        onOk={() => formPayment.submit()}
        okText="Đồng ý"
        cancelText="Đóng"
        okButtonProps={{
          loading: paymentLoading,
        }}
      >
        <Form form={formPayment} layout="vertical" onFinish={onSubmitForm}>
          <ModalPayment listSelectedProduct={listSelectedProduct} />
        </Form>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ product, cart }) => {
  return {
    listCategories: product.toJS().listCategories,
    listProducts: product.toJS().listProducts,
    listSelectedProduct: cart.toJS().listSelectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetListCategories: () => {
    dispatch(actions.getListCategories());
  },
  onGetListProducts: (payload) => {
    dispatch(actions.getListProducts(payload));
  },
  onAddProductToCart: (payload) => {
    dispatch(cartActions.addProductToCart(payload));
  },
  onCreatePayment: (payload) => {
    cartActions.createPayment(dispatch)(payload);
  },
  onResetCart: () => {
    dispatch(cartActions.resetCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
