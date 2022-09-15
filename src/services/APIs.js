import axios from "axios";

async function removeCartProduct(id, config) {
  const promise = await axios.delete(`localhost:5000/cart/${id}`, config);
  return promise;
}

async function addCartProduct(config) {
  const promise = await axios.post(`localhost:5000/cart`, config);
  return promise;
}

async function getCartProduct(config) {
  const promise = await axios.get(`localhost:5000/cart`, config);
  return promise;
}

async function cleanCart(config) {
  const promise = await axios.delete(`localhost:5000/cart/all`, config);
  return promise;
}

export { removeCartProduct, addCartProduct, getCartProduct, cleanCart };
