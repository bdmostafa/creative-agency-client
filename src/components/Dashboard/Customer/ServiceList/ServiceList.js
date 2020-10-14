import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import service from '../../../../images/icons/service1.png';
import './ServiceList.css'

const ServiceList = () => {
    return (
        <Row>
            <Col md={5}>
                <Card className="service-card">
                    <Row className='d-flex justify-content-between align-items-center p-4'>
                    <Card.Img src={service} className="w-25"/>
                    <Button variant="primary">Status</Button>
                    </Row>

                    <Card.Body>
                        <Card.Title>Web & Mobile Design</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={5}>
                <Card className="service-card">
                    <Row className='d-flex justify-content-between align-items-center p-4'>
                    <Card.Img src={service} className="w-25"/>
                    <Button variant="primary">Status</Button>
                    </Row>

                    <Card.Body>
                        <Card.Title>Web & Mobile Design</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={5}>
                <Card className="service-card">
                    <Row className='d-flex justify-content-between align-items-center p-4'>
                    <Card.Img src={service} className="w-25"/>
                    <Button variant="primary">Status</Button>
                    </Row>

                    <Card.Body>
                        <Card.Title>Web & Mobile Design</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default ServiceList;