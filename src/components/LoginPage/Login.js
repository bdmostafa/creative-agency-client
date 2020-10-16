import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, fbSignIn, loginFrameworkInit, signInWithEmailAndPassword } from './FirebaseLoginManager';
import { googleSignIn } from './FirebaseLoginManager';
import { useForm } from 'react-hook-form';
import { Button, Container, Image } from 'react-bootstrap';
import './Login.css';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/icons/google.png';

const Login = () => {
    document.title = "Login Page | Creative Agency"

    // Initialize firebase/login framework
    loginFrameworkInit();

    const { loggedInUser, setLoggedInUser, setAdmin } = useContext(UserContext);

    const history = useHistory();

    const location = useLocation();
    
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(res => {
                setLoggedInUser(res);
                // Redirect when signed in
                history.replace(from);
            })
    }

    // Check if the user is an admin or not when logged in for the first time 
    useEffect(() => {

        fetch('http://https://creative-agency2020.herokuapp.com/isAdmin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                email: loggedInUser.email
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result) setAdmin(true);
                
            })

    }, [loggedInUser])


    return (
        <Container className="text-center">
            <Link to='/'>
                <Image className="login-logo" src={logo} />
            </Link>

            <div className="login-box text-center">
                <h2>Login With</h2>
                <Button
                    onClick={handleGoogleSignIn}
                    variant="outline-secondary"
                    className="login-btn"
                >
                    <Image
                        className="google-icon"
                        src={googleIcon}
                    />
                    <span>Continue with Google</span>
                </Button>
                <p>
                    <span>Don't have an account?</span>
                    <strong
                        onClick={handleGoogleSignIn}
                        style={{
                            cursor: 'pointer',
                            color: '#3F90FC'
                        }}
                    >
                        {' '} Create an account
                    </strong>
                </p>
            </div>
        </Container >
    );
};

export default Login;