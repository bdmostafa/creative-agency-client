import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import AddReview from './Customer/AddReview/AddReview';
import PlaceOrder from './Customer/PlaceOrder/PlaceOrder';
import ServiceList from './Customer/ServiceList/ServiceList';
import HeaderDashboard from './shared/HeaderDashboard/HeaderDashboard';
import Sidebar from './shared/Sidebar/Sidebar';
import './Dashboard.css';
import AllServiceList from './Admin/AllServiceList/AllServiceList';
import AddService from './Admin/AddService/AddService';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import { UserContext } from '../../App';


const Dashboard = () => {
    const { admin, setAdmin, user, setUser } = useContext(UserContext);
    const path = useLocation().pathname;
    const history = useHistory();

     // If admin is logged in, update user state
     useEffect(() => {
        if (admin) {
            setUser(false);
            if(path !== '/admin') {
                history.replace('/admin')
            }
        }
        if(user) {
            // setAdmin(false);
            history.push('/user')
        }
    }, [user, admin])

    console.log('user:', user, 'admin:', admin)

    return (
        <div style={{ backgroundColor: 'white'}}>
            <HeaderDashboard />
            <Row >
                <Col xs={12} md={3}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={9} className="right-side-content">
                    {
                        (path == `/user/place-order` || path == `/user`) && <PlaceOrder />
                    }
                    {
                        path === '/user/service-list' && <ServiceList />
                    }
                    {
                        path === '/user/add-review' && <AddReview />
                    }
                    {
                        (path === '/admin/all-service-list' || path === '/admin') && <AllServiceList />
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