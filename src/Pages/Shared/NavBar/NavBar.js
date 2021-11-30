import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar-container" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            className="nav-icon"
                            alt=""
                            src=""
                            // width="60"
                            // height="60"
                            className="d-inline-block align-top"
                        />{' '}
                        Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav className="text-center">
                            <Nav.Link href="#home">Projects</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;