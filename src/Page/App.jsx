import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Number from './Number/Number';
import Header from './Header/Header';
import './App.scss';

function App() {
  
  const props = {
    md: {
      span: 10,
      offset: 1,
    },
    xs: {
      span: 8,
      offset: 2,
    },
    lg: {
      span: 10,
      offset: 1,
    },
  };

  return (
    <Container className="container-page">
      <Row>
        <Col { ...props } className="header">
          <Header />
        </Col>
        <Col { ...props } className="number">
          <Number />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
