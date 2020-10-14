import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import service from '../../../images/icons/service1.png';
import './Services.css';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();

    // When page is loaded, fetch api to get all services
    useEffect(() => {
        fetch('http://localhost:4200/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleService = () => {
        history.push('/user')
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