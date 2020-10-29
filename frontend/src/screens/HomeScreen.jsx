import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products_old';

const HomeScreen = () => {
  return (
    <main>
      <Container className="my-5">
        <h2>Latest Products</h2>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default HomeScreen;
