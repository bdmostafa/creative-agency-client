import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';


const ClientCompany = () => {
    return (
        <Container>
            <Row className="m-5 d-flex align-items-center justify-content-center">
                <Col xs={6} sm={4} md={2}><Image src={slack} className="w-100" /></Col>
                <Col xs={6} sm={4} md={2}><Image src={google} className="w-100" /></Col>
                <Col xs={6} sm={4} md={2}><Image src={uber} className="w-75 ml-3" /></Col>
                <Col xs={6} sm={4} md={2}><Image src={netflix} className="w-75" /></Col>
                <Col xs={6} sm={4} md={2}><Image src={airbnb} className="w-100" /></Col>
            </Row>
        </Container>
    );
};

export default ClientCompany;