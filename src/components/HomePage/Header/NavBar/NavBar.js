import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png';
import './NavBar.css';

const NavBar = () => {
    const history = useHistory();
    const { loggedInUser } = useContext(UserContext);

    const handleLogin = () => {
        history.push('/login');
    }


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
                        {
                            loggedInUser
                                && loggedInUser.name
                                ? <strong> {loggedInUser.name}</strong>
                                : <Button
                                    onClick={handleLogin}
                                    size="sm"
                                    variant="dark"
                                    className="btn-brand ml-auto"
                                >
                                    Login
                            </Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;