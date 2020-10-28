import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col className="my-3">
            <h2>Latest Products</h2>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomeScreen;
