import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cart.contants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios(`/api/products/${id}`);

    const itemToAdd = {
      name: data.name,
      qty,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      productId: data._id,
    };
    dispatch({ type: CART_ADD_ITEM, payload: itemToAdd });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (err) {}
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (err) {}
};
