import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailReducer,
} from './reducers/productListReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  productList: productListReducer,
  product: productDetailReducer,
  cart: cartReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
