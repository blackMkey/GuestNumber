/* eslint-disable global-require */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Number from './Number/Number';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const http = require('http');
  const port = process.env.PORT || 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  });

  server.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
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
