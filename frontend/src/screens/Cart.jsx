import React, { useEffect } from 'react';
import { Row, Col, ListGroup, Button, Image, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

const Cart = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const qty = props.location.search ? +props.location.search.split('=')[1] : 1;
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    props.history.push(`/login?redirect=shipping`);
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.productId}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${item.productId}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>Price ${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.productId, +e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeItemFromCart(item.productId)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h2>
                Subtotal {cartItems.reduce((sum, item) => sum + item.qty, 0)}{' '}
                Items
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              Total : $
              {cartItems.reduce((sum, item) => sum + item.qty * item.price, 0)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
