import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Header.scss';

const Header = () => {

  return (
    <Navbar bg="light" variant="light" className="nav-container">
      <Navbar.Brand href="/" className="nav-brand">Guess Number</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end nav-link-right" >
        <Nav>
          <Nav.Link href="/">Find Number</Nav.Link>
          <Nav.Link href="#">/</Nav.Link>
          <Nav.Link href="/count">Count Lucky</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;