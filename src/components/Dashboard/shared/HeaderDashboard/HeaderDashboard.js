import React, { useContext } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png'

const HeaderDashboard = () => {
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser.name)
    return (
        <Row>
            <Col md={2}>
            <Image src={logo} className="logo-img" />
            </Col>
            <Col md={5}>
                Order
            </Col>
            <Col md={5}>
                {loggedInUser.name}
            </Col>
        </Row>
    );
};

export default HeaderDashboard;