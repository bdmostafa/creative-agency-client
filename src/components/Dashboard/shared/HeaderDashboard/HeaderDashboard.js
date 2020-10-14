import React, { useContext } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png'

const HeaderDashboard = () => {
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser.name)
    return (
        <Row className="p-3">
            <Col xs={12} md={3}>
            <Image src={logo} className="logo-img" />
            </Col>
            <Col xs={6} md={5}>
                <h2>Place Order</h2> 
            </Col>
            <Col style={{textAlign: 'end', paddingRight: '5rem'}} xs={6} md={4}>
                {loggedInUser.name || 'name'}
            </Col>
        </Row>
    );
};

export default HeaderDashboard;