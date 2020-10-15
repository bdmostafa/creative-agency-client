import React, { useContext } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png'

const HeaderDashboard = () => {
    const {loggedInUser, admin} = useContext(UserContext);
    const path = useLocation().pathname;

    return (
        <Row className="p-3">
            <Col xs={12} md={3}>
                <Link to='/'>
                    <Image src={logo} className="logo-img" />
                </Link>
            </Col>
            <Col xs={6} md={5}>
                <h2>
                    {
                        (path === '/user/place-order' || path === '/user') && 'Place Order'
                    }
                    {
                        path === '/user/service-list' && 'My Service List'
                    }
                    {
                        path === '/user/add-review' && 'Add Review'
                    }
                    {
                        (path === '/admin/all-service-list' || path === '/admin') && 'All Services List'
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
                {
                    admin && <Image src={loggedInUser.image} style={{width: '45px', marginRight: '10px'}} roundedCircle />
                }
                <strong>{loggedInUser.name}</strong> 
            </Col>
        </Row>
    );
};

export default HeaderDashboard;