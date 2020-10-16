import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import './ClientsFeedback.css'

const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);

    const reviews6 = reviews.slice(0, 6);

    // When page is loaded, fetch api to get all services
    useEffect(() => {
        fetch('http://localhost:4200/reviews')
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
                    && reviews6.map(review =>
                        <Col key={review._id} xs={12} sm={6} md={4}>
                            <Card className="feedback-box mb-5 p-1">
                                {/* <Row className="align-items-center justify-content-start"> */}
                                <div className=" d-flex align-items-center justify-content-start">
                                    <div className="p-2 col-example text-left">
                                        <Image src={review.image} style={{width:'64px', height:'64px', borderRadius:'50%'}} />
                                    </div>
                                    <div className="p-2 col-example text-left">
                                        <Card.Title>{review.name}</Card.Title>
                                        <p>{review.designation}</p>
                                    </div>
                                </div>

                                {/* </Row> */}
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