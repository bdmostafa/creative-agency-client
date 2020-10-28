import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
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
import Footer from '../Footer/Footer';


const Dashboard = () => {
    document.title = "Dashboard | Creative Agency"

    const { admin, user, setUser } = useContext(UserContext);

    const path = useLocation().pathname;

    const history = useHistory();

    // If admin is logged in, update user state and vice-versa
    useEffect(() => {
        if (admin) {
            setUser(false);
            if (path.startsWith('dashboard', 1)) {
                history.replace('/dashboard/admin')
            }
        }
        if (user) {
            if (path.startsWith('dashboard', 1)) {
                history.push('/dashboard/user')
            }
        }
    }, [user, admin])

    return (
        <div style={{ backgroundColor: 'white', paddingLeft: '2rem' }}>
            <HeaderDashboard />
            <Row >
                <Col xs={12} sm={4} md={3}>
                    <Sidebar />
                </Col>
                <Col xs={12} sm={8} md={9} className="right-side-content">
                    
                    {
                        user
                            && (path === `/dashboard/user/place-order` || path === `/dashboard/user`)
                            ? <PlaceOrder />
                            : path === '/dashboard/user/service-list'
                                ? <ServiceList />
                                : path === '/dashboard/user/add-review'
                                    ? <AddReview />
                                    : ''
                    }

                    {
                        admin
                            && (path === '/dashboard/admin/all-service-list' || path === '/dashboard/admin')
                            ? <AllServiceList />
                            : path === '/dashboard/admin/add-service'
                                ? <AddService />
                                : path === '/dashboard/admin/make-admin'
                                    ? <MakeAdmin />
                                    : ''
                    }

                </Col>
            </Row>
            <Footer />
        </div>

    );
};

export default Dashboard;