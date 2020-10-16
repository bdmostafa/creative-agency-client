import React, { useContext, useEffect, useState } from 'react';
import { Button, DropdownButton, Row, Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import './AllServiceList.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AllServiceList = () => {
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

    const handleStatus = (e, id) => {
        fetch(`http://localhost:4200/updateStatus/`, {
            method: 'PATCH',
            body: JSON.stringify({ status: e.value }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                id
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("You have successfully updated an order status");
                } else {
                    alert("Oops... Status has not been updated. Please try again.");
                }
            })
    }

    const options = [
        'Pending', 'On going', 'Done'
    ];
    // const defaultOption = options[0];


    return (
        <div className="pr-5">
            <Table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderedServices.length > 0
                        && orderedServices.map(service =>
                            <tr key={service._id}>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.title}</td>
                                <td>{service.projectDetails}</td>
                                <td className="status">
                                    <Dropdown
                                    style={{color: 'red'}}
                                        onChange={(e) => { handleStatus(e, `${service._id}`) }}
                                        options={options}
                                        value={service.status}
                                    // placeholder="Select an option" 
                                    />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
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
            </Row>
        </div>
    );
};

export default AllServiceList;


