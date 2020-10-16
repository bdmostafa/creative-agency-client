import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './HeaderMain.css';
import frame from '../../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <Container>
            <Row>
                <Col md={5} className="mt-5">
                    <h2 className="heading-line mb-3">
                        Let’s Grow Your
                        <br />
                        Brand To The
                        <br />
                        Next Level
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <Button size="sm" variant="dark" className="btn-brand mt-3">Hire Us</Button>
                </Col>
                <Col md={7}>
                    <Image src={frame} className="frame-img d-none d-md-block" />
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderMain;