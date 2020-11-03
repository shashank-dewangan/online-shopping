import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cart.contants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const cartItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.productId === cartItem.productId
      );

      if (existItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.productId === existItem.productId ? cartItem : item
        );
        return { ...state, cartItems: updatedCartItems };
      } else return { ...state, cartItems: [...state.cartItems, cartItem] };
    }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload
        ),
      };
    default:
      return state;
  }
};
