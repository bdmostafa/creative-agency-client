import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Services.css';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const {setOrder} = useContext(UserContext);
    const history = useHistory();

    // When page is loaded, fetch api to get all services
    useEffect(() => {
        fetch('http://localhost:4200/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleService = (id) => {
        // Update state on which service is ordered
        const selectedService = services.find(service => service._id === id);
        setOrder(selectedService);
        // Redirect to place order page
        history.push(`/user/place-order`);
    }

    return (
        <Container className="text-center mb-5">
            <Row><h2 className="m-auto p-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span> </h2></Row>
            <Row>
                {
                    services && services.map(service =>
                        <ServicesCard
                            key={service._id}
                            handleService={handleService}
                            service={service}
                        />
                    )
                }
            </Row>
            
        </Container>
    );
};

export default Services;