import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { WindowDimensions } from '../UI/WindowDimensions';
import '../Style/Header.scss';

const Header = () => {
    const size = WindowDimensions();
    return (
        <Navbar className="nav-container">
            <Navbar.Brand href="/" className="nav-brand">Guess Number</Navbar.Brand>
            {!!size && size === 'lg' ?
                <Nav className="justify-content-end nav-link-right">
                    <Nav.Link href="/">Find Number</Nav.Link>
                    <Nav.Link href="#">/</Nav.Link>
                    <Nav.Link href="/count">Count Number</Nav.Link>
                </Nav>
                :
                <Dropdown className="justify-content-end nav-link-right">
                    <Dropdown.Toggle size="sm" >
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            }
        </Navbar>

    );
};

export default Header;