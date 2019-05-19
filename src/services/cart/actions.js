import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = products => ({
  type: ADD_PRODUCT,
  payload: products
});

export const removeProduct = products => ({
  type: REMOVE_PRODUCT,
  payload: products
});
