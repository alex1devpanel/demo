import React, { useEffect } from 'react';
import { connect } from 'dva';
import actions from '@/store/productDetail/actions';
const ProductDetail = (props) => {
  const {
    location: { query },
    onGetProductDetail,
  } = props;
  const { id } = query;
  useEffect(() => {
    onGetProductDetail({ id });
  }, [id, onGetProductDetail]);
  return <div>sadsadsa</div>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onGetProductDetail: (payload) => dispatch(actions.getProductDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
