import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import './ServiceList.css'

const ServiceList = () => {
    document.title = "Dashboard | Your Service List | Creative Agency"

    const { loggedInUser } = useContext(UserContext);

    const [orderedServices, setOrderedServices] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency2020.herokuapp.com/ordersListByEmail', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                email: loggedInUser.email
            }
        })
            .then(res => res.json())
            .then(data => setOrderedServices(data))
    }, [])

    // Handle button color change depending on status
    const handleStatusColor = (status) => {
        if (status === 'Pending') {
            return 'pending-red';
        };
        if (status === 'Done') {
            return 'done-green';
        }
        if (status === 'On going') {
            return 'onGoing-yellow';
        }
    }

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
                    <Col key={service._id} xs={12} sm={12} md={6}>
                        <Card className="service-card">
                            <Row className='d-flex justify-content-between align-items-center pt-3 pl-3 pr-3 pb-2'>
                                <Card.Img src={service && `data:image/png;base64,${service.img.img ? service.img.img : service.image.img}`} className="w-25" />
                                <Button
                                    className={handleStatusColor(service.status)}
                                    variant="primary"
                                >
                                    {service.status}
                                </Button>
                            </Row>
                            <Card.Body>
                                <Card.Title>
                                    {service.title}
                                </Card.Title>
                                <Card.Text>
                                    {service.description ? service.description : service.projectDetails}
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