import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import customer from '../../../images/customer-1.png';
import './ClientsFeedback.css'

const ClientsFeedback = () => {
    return (
        <Container className="text-center mb-5 pb-5">
            <Row><h2 className="m-auto p-5">Clients <span style={{color: '#7AB259'}}> Feedback</span> </h2></Row>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <Card className="feedback-box mb-5">
                        <Row className="align-items-center text-align-start">
                            <Col> 
                             <Image src={customer} className="w-25" rounded /> 
                             </Col>
                            <Col>
                            <Card.Title>Nash Patrik</Card.Title>
                            <p>CEO, Manpol</p>
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Text className="text-style">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus sed sapiente provident quis nisi!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card className="feedback-box">
                        <Row className="align-items-center text-align-start">
                            <Col> 
                             <Image src={customer} className="w-25" rounded /> 
                             </Col>
                            <Col>
                            <Card.Title>Nash Patrik</Card.Title>
                            <p>CEO, Manpol</p>
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Text className="text-style">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus sed sapiente provident quis nisi!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card className="feedback-box">
                        <Row className="align-items-center text-align-start">
                            <Col> 
                             <Image src={customer} className="w-25" rounded /> 
                             </Col>
                            <Col>
                            <Card.Title>Nash Patrik</Card.Title>
                            <p>CEO, Manpol</p>
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Text className="text-style">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus sed sapiente provident quis nisi!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ClientsFeedback;