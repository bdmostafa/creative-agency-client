import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import service from '../../../images/icons/service1.png';
import './Services.css';

const Services = () => {
    const history = useHistory();
    const handleService = () => {
        history.push('/user')
    }
    return (
        <Container className="text-center mb-5">
            <Row><h2 className="m-auto p-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span> </h2></Row>
            <Row>
                <Col xs={12} sm={6} md={4}
                    onClick={handleService}
                >
                    <Card className="card-style">
                        <Card.Body>
                            <Card.Img variant="top" src={service} className="w-25 m-3" />
                            <Card.Title>Web & Mobile design</Card.Title>
                            <Card.Text>
                                We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card className="card-style">
                        <Card.Body>
                            <Card.Img variant="top" src={service} className="w-25 m-3" />
                            <Card.Title>Web & Mobile design</Card.Title>
                            <Card.Text>
                                We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card className="card-style">
                        <Card.Body>
                            <Card.Img variant="top" src={service} className="w-25 m-3" />
                            <Card.Title>Web & Mobile design</Card.Title>
                            <Card.Text>
                                We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;