import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    document.title = "Not Found | Creative Agency"
    const history = useHistory();
    const goHome = () => {
        history.push('/')
    }
    return (
        <div className='not-match'>
            <h1>404</h1>
            <p>Oops... Page Not Found!</p>
            <Button
                onClick={goHome}
                variant="outline-primary"
            >Go Home</Button>
        </div>
    );
};

export default NoMatch;