import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <Container>
            <Navbar bg="#FBD062" expand="lg">
                <Navbar.Brand><Image src={logo} className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav-link">
                    <Link to="/">Home</Link>
                    <Link to="/">Our Portfolio</Link>
                    <Link to="/">Our Team</Link>
                    <Link to="/">Contact Us</Link>
                    <Button size="sm" variant="dark" className="btn-brand">Login</Button>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;