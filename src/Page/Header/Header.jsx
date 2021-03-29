import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.scss';

const Header = () => {

  return (
    <Navbar className="nav" expand="lg" >
      <Container>
        <Navbar.Brand href="/"><span>Guest Number</span></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;