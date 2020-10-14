import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import AddReview from './Customer/AddReview/AddReview';
import PlaceOrder from './Customer/PlaceOrder/PlaceOrder';
import ServiceList from './Customer/ServiceList/ServiceList';
import HeaderDashboard from './shared/HeaderDashboard/HeaderDashboard';
import Sidebar from './shared/Sidebar/Sidebar';
import './Dashboard.css';
import AllServiceList from './Admin/AllServiceList/AllServiceList';
import AddService from './Admin/AddService/AddService';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';


const Dashboard = () => {
    // const {serviceId} = useParams();
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
                        path == `/user/place-order` && <PlaceOrder />
                    }
                    {
                        path === '/user/service-list' && <ServiceList />
                    }
                    {
                        path === '/user/add-review' && <AddReview />
                    }
                    {
                        path === '/admin/service-list' && <AllServiceList />
                    }
                    {
                        path === '/admin/add-service' && <AddService />
                    }
                    {
                        path === '/admin/make-admin' && <MakeAdmin />
                    }
                </Col>
            </Row>
        </div>

    );
};

export default Dashboard;