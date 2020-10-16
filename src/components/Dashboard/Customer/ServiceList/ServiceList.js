import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import service from '../../../../images/icons/service1.png';
import './ServiceList.css'

const ServiceList = () => {
    const { loggedInUser } = useContext(UserContext);
    const [orderedServices, setOrderedServices] = useState([]);

    useEffect(() => {
        fetch('http:///localhost:4200/ordersListByEmail', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrderedServices(data))
    }, [])

    console.log(loggedInUser.email, orderedServices)

    return (
        <Row>
            {
                orderedServices.length === 0
                && <Button className="mt-5 m-auto" variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                           Service List Loading...
                    </Button>
            }
            {
                orderedServices.length > 0
                && orderedServices.map(service =>
                    <Col key={service._id} md={5}>
                        <Card className="service-card">
                            <Row className='d-flex justify-content-between align-items-center p-4'>
                                <Card.Img src={service && `data:image/png;base64,${service.img.img ? service.img.img : service.image.img}`} className="w-25" />
                                <Button variant="primary">{service.status}</Button>
                            </Row>
                            <Card.Body>
                                <Card.Title>
                                    {service.title}
                                </Card.Title>
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
        </Row>

    );
};

export default ServiceList;