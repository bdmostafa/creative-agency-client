import React, { useContext } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png'

const HeaderDashboard = () => {
    const {loggedInUser} = useContext(UserContext);
    const path = useLocation().pathname;
    console.log(loggedInUser.name)
    return (
        <Row className="p-3">
            <Col xs={12} md={3}>
            <Image src={logo} className="logo-img" />
            </Col>
            <Col xs={6} md={5}>
                <h2>
                    {
                        path === '/user/place-order' && 'Place Order'
                    }
                    {
                        path === '/user/service-list' && 'Your Service List'
                    }
                    {
                        path === '/user/add-review' && 'Add Review'
                    }
                    {
                        path === '/admin/service-list' && 'All Services List'
                    }
                    {
                        path === '/admin/add-service' && 'Add Service'
                    }
                    {
                        path === '/admin/make-admin' && 'Make Admin'
                    }
                </h2> 
            </Col>
            <Col style={{textAlign: 'end', paddingRight: '5rem'}} xs={6} md={4}>
                {loggedInUser.name || 'name'}
            </Col>
        </Row>
    );
};

export default HeaderDashboard;