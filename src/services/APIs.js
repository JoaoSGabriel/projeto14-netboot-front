import axios from "axios";

const BASE_URL = "https://netbootback.herokuapp.com";

async function removeCartProduct(id, config) {
  const promise = await axios.delete(
    `${BASE_URL}/cart/${id}`,
    config
  );
  return promise;
}

async function addCartProduct(config) {
  const promise = await axios.post(`${BASE_URL}/cart`, config);
  return promise;
}

async function getCartProducts(config) {
  const promise = await axios.get(`${BASE_URL}/cart`, config);
  return promise;
}

async function cleanCart(config) {
  const promise = await axios.delete(`${BASE_URL}/cleanCart`, config);
  return promise;
}

export { removeCartProduct, addCartProduct, getCartProducts, cleanCart };
