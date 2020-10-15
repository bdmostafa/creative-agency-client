import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import './AllServiceList.css'

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
                        orderedServices.length === 0
                        && <Button className="mt-5" variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    }
                    {
                        orderedServices.length > 0
                        && orderedServices.map(service =>
                            <tr key={service._id}>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.title}</td>
                                <td>{service.projectDetails}</td>
                                <td className="status">
                                    <select>
                                        <option value="Pending">Pending</option>
                                        <option value="On going">On going</option>
                                        <option value="Done">Done</option>
                                        <i class="fas fa-sort-down text-dark"></i></select>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllServiceList;