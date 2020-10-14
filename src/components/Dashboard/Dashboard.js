import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AddReview from './Customer/AddReview/AddReview';
import PlaceOrder from './Customer/PlaceOrder/PlaceOrder';
import ServiceList from './Customer/ServiceList/ServiceList';
import HeaderDashboard from './shared/HeaderDashboard/HeaderDashboard';
import Sidebar from './shared/Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const path = useLocation().pathname;

    return (
        <div style={{ backgroundColor: 'white'}}>
            <HeaderDashboard />
            <Row >
                <Col xs={12} md={3}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={9} className="right-side-content">
                    {
                        path === '/user/place-order' && <PlaceOrder />
                    }
                    {
                        path === '/user/service-list' && <ServiceList />
                    }
                    {
                        path === '/user/add-review' && <AddReview />
                    }
                </Col>
            </Row>
        </div>

    );
};

export default Dashboard;