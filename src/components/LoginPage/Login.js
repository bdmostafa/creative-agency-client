import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, fbSignIn, loginFrameworkInit, signInWithEmailAndPassword } from './FirebaseLoginManager';
import { googleSignIn } from './FirebaseLoginManager';
import { useForm } from 'react-hook-form';
import { Button, Container, Image } from 'react-bootstrap';
import './Login.css';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/icons/google.png';

const Login = () => {
    // Initialize firebase/login framework
    loginFrameworkInit();

    const { setLoggedInUser } = useContext(UserContext);
    // const [newUser, setNewUser] = useState(false);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    // const handleResponse = (res) => {
    //     setLoggedInUser(res);
    //     // Redirect when signed in
    //     history.replace(from);
    // }



    // const { register, errors, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     // const updatedFromData = {
    //     //     ...data,
    //     // }
    //     const { email, password } = data;

    //     if (newUser && email && password) {
    //         createUserWithEmailAndPassword(email, password)
    //             .then(res => {
    //                 handleResponse(res);
    //             })
    //     }

    //     if (!newUser && email && password) {
    //         signInWithEmailAndPassword(email, password)
    //             .then(res => {
    //                 handleResponse(res);
    //             })
    //     }
    // }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                setLoggedInUser(res);
                // Redirect when signed in
                history.replace(from);
            })
    }

    return (
        <Container className="text-center">
            <Image className="login-logo" src={logo} />
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