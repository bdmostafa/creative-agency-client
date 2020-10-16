import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import './ClientsFeedback.css'
import FeedbackCard from './FeedbackCard';

const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);

    // Slice 6 reviews for displaying 
    const reviews6 = reviews.slice(0, 6);

    // When page is loaded, fetch api to get all services
    useEffect(() => {
        fetch('https://creative-agency2020.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <Container className="text-center mb-5 pb-5">
            <Row><h2 className="m-auto p-5">Clients <span style={{ color: '#7AB259' }}> Feedback</span> </h2></Row>
            <Row>
                {
                    reviews6.length === 0
                    && <Button className="m-5 m-auto" variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                            Feedback Loading...
                        </Button>
                }
                {
                    reviews6.length > 0
                    && reviews6.map(review => <FeedbackCard key={review._id} review={review} ></FeedbackCard>)
                }
            </Row>
        </Container>
    );
};

export default ClientsFeedback;