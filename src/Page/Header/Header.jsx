import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import WindowDimensions from '../UI/WindowDimensions';
import '../Style/Header.scss';

const Header = () => {
  const size = WindowDimensions();
  console.log('size', size);
  return (
    <Navbar bg="light" variant="light" className="nav-container">
      <Navbar.Brand href="/" className="nav-brand">Guess Number</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end nav-link-right" >
        <Nav>
          <Nav.Link href="/">Find Number</Nav.Link>
          <Nav.Link href="#">/</Nav.Link>
          <Nav.Link href="/count">Count Number</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;