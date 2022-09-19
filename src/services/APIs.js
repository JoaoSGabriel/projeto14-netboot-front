import axios from "axios";

async function removeCartProduct(id, config) {
  const promise = await axios.delete(
    `http://localhost:5000/cart/${id}`,
    config
  );
  return promise;
}

async function addCartProduct(body, config) {
  const promise = await axios.post(`http://localhost:5000/cart`, body, config);
  return promise;
}

async function getCartProducts(id, config) {
  const promise = await axios.get(`http://localhost:5000/cart/${id}`, config);
  return promise;
}

async function cleanCart(config) {
  const promise = await axios.delete(`http://localhost:5000/cleanCart`, config);
  return promise;
}

async function postCheckout(body, config) {
  const promise = await axios.post(
    `http://localhost:5000/checkout`,
    body,
    config
  );
  return promise;
}

async function getUser(id, config) {
  const promise = await axios.post(`http://localhost:5000/user/${id}`, config);
  return promise;
}

async function updateQt(action, id, config) {
  const promise = await axios.put(
    `http://localhost:5000/cart/${id}/action?${action}=1`,
    config
  );
  return promise;
}

export {
  removeCartProduct,
  addCartProduct,
  getCartProducts,
  cleanCart,
  postCheckout,
  getUser,
  updateQt,
};
