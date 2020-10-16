import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const FeedbackCard = ({ review: {image, name, designation, description} }) => {

    return (
        <Col xs={12} sm={6} md={4}>
            <Card className="feedback-box mb-4 p-1">
                <div className=" d-flex align-items-center justify-content-start">
                    <div className="p-2 col-example text-left">
                        <Image src={image} style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
                    </div>
                    <div className="p-2 col-example text-left">
                        <Card.Title>{name}</Card.Title>
                        <p>{designation}</p>
                    </div>
                </div>
                <Card.Body>
                    <Card.Text className="text-style">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeedbackCard;