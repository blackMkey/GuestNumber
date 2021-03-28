import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Number from './Number/Number';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const containerLayout = {
    span: 8,
    offset: 2,
  };
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col md={containerLayout} xs={containerLayout} lg={containerLayout} className="header">
            <span>Guest Number</span>
          </Col>
          <Col md={containerLayout} xs={containerLayout} lg={containerLayout} className="number">
            <Number />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
