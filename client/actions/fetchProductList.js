import axios from 'axios';

const fetchProductList = () => {
  return (dispatch) => {
    let url = `http://18.224.200.47/products/list`;
    return axios
      .get(url)
      .then((results) => {
        return dispatch({
          type: 'PRODUCT_LIST',
          payload: results.data,
        });
      })
      .catch((err) => {
        console.log('error getting product list:', err);
      });
  };
};

export default fetchProductList;
