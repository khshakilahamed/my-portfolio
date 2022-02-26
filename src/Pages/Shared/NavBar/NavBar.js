import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark" fixed="top">
                <Container>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>Portfolio</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav className="text-center">
                            <Nav.Link>
                                <Link to="/home#" className="nav-line"> Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <NavHashLink to="/home#projects" className="nav-line"> Projects</NavHashLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavHashLink to="/home#contact" className="nav-line"> Contact</NavHashLink>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/blogs" className="nav-line"> Blogs</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about" className="nav-line"> About</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;