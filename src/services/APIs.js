import axios from "axios";

const BASE_URL = "https://netbootback.herokuapp.com";

export async function signUp(config) {
  const promise = await axios.post(`${BASE_URL}/sign-up`, config);
  return promise;
}

export async function signIn(config) {
  const promise = await axios.post(`${BASE_URL}/sign-in`, config);
  return promise;
}

export async function getProducts(config) {
  const promise = await axios.get(`${BASE_URL}/products`, config);
  return promise;
}

export async function getOneProducts(id, config) {
  const promise = await axios.get(`${BASE_URL}/products/${id}`, config);
  return promise;
}

export async function addFavoriteProduct(id, config) {
  const promise = await axios.put(
    `${BASE_URL}/products/favorite/${id}`,
    {},
    config
  );
  return promise;
}

export async function removeFavoriteProduct(id, body, config) {
  const promise = await axios.put(
    `${BASE_URL}/produtcs/remove/favorite/${id}`,
    body,
    config
  );
  return promise;
}

export async function removeCartProduct(id, config) {
  const promise = await axios.delete(`${BASE_URL}/cart/${id}`, config);
  return promise;
}

export async function addCartProduct(body, config) {
  const promise = await axios.post(`${BASE_URL}/cart`, body, config);
  return promise;
}

export async function getCartProducts(id, config) {
  const promise = await axios.get(`${BASE_URL}/cart/${id}`, config);
  return promise;
}

export async function cleanCart(id, config) {
  const promise = await axios.delete(`${BASE_URL}/cleanCart/${id}`, config);
  return promise;
}

export async function postCheckout(body, config) {
  const promise = await axios.post(`${BASE_URL}/checkout`, body, config);
  return promise;
}

export async function getCheckout(id, config) {
  const promise = await axios.get(`${BASE_URL}/checkout/${id}`, config);
  return promise;
}

export async function getUser(id, config) {
  const promise = await axios.get(`${BASE_URL}/user/${id}`, config);
  return promise;
}

export async function updateQt(action, id, body, config) {
  const promise = await axios.put(
    `${BASE_URL}/cart/${id}/action?${action}=1`,
    body,
    config
  );
  return promise;
}
