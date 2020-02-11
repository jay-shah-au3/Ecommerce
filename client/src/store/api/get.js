import { API_ORIGIN_URL } from "../../config";
const fetchProducts = (store, gender, category) => {
  let url = `${API_ORIGIN_URL}/product/${category}`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {

      store.dispatch({
        type: "UPDATE_ALL_PRODUCTS",
        payload: data[0].products
      });
     });
};

const fetchCategories = store => {
  let url = `${API_ORIGIN_URL}/categories`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {
      store.dispatch({
        type: "UPDATE_CATEGORIES",
        payload: data
      });
    });
};
export { fetchProducts, fetchCategories };