import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './ClientsFeedback.css'

const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);

    // When page is loaded, fetch api to get all services
    useEffect(() => {
        fetch('http://localhost:4200/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    console.log(reviews)

    return (
        <Container className="text-center mb-5 pb-5">
            <Row><h2 className="m-auto p-5">Clients <span style={{ color: '#7AB259' }}> Feedback</span> </h2></Row>
            <Row>
                {
                    reviews.length > 0
                    && reviews.map(review =>
                        <Col key={review._id} xs={12} sm={6} md={4}>
                            <Card className="feedback-box mb-5">
                                <Row className="align-items-center text-align-start">
                                    <Col>
                                        <Image src={review.image} className="w-25" rounded />
                                    </Col>
                                    <Col>
                                        <Card.Title>{review.name}</Card.Title>
                                        <p>{review.designation}</p>
                                    </Col>
                                </Row>
                                <Card.Body>
                                    <Card.Text className="text-style">
                                        {review.description}
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default ClientsFeedback;