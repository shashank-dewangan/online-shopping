import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productListReducer';

const reducer = combineReducers({ productList: productListReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
