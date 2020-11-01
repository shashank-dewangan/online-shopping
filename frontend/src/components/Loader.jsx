import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation="border"
      variant="primary"
      role="status"
      style={{
        height: '100px',
        width: '100px',
        position: 'absolute',
        left: 'calc(50% - 50px)',
        top: 'calc(50% - 50px)',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
};

export default Loader;
