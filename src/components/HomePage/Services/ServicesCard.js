import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServicesCard = ({ handleService, service }) => {
    
    const { _id, title, description } = service;
console.log(service)
    return (
        <Col
            xs={12}
            sm={6}
            md={4}
            onClick={()=>handleService(_id)}
        >
            <Card className="card-style">
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src={service && `data:image/png;base64,${service.img.img}`}
                        className="w-25 m-3"
                    />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServicesCard;