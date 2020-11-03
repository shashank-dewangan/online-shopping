import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

const Cart = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const qty = props.location.search ? props.location.search.split('=')[1] : 1;
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(addToCart(id, qty));
  }, [dispatch, id, qty]);
  console.log('cart', JSON.parse(localStorage.getItem('cartItems')));
  console.log('cartItems', cartItems);
  return (
    <div>
      <Link to={`/`} className="btn btn-light my-3 lightbutton">
        Go Back
      </Link>
      In Cart
    </div>
  );
};

export default Cart;
