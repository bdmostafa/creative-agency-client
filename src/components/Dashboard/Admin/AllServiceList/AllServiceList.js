import React from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import './AllServiceList.css'

const AllServiceList = () => {
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
                    <tr>
                        <td>Mostafa</td>
                        <td>Mark@g.f</td>
                        <td>design</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, pariatur?</td>
                        <td className="status">
                            <select>
                                <option value="Pending">Pending</option>
                                <option value="On going">On going</option>
                                <option value="Done">Done</option>
                                 <i class="fas fa-sort-down text-dark"></i></select>
                        </td>
                    </tr>
                    <tr>
                        <td>Mostafa</td>
                        <td>Mark@g.f</td>
                        <td>design</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, pariatur?</td>
                        <td className="status">
                            <select>
                                <option value="Pending">Pending</option>
                                <option value="On going">On going</option>
                                <option value="Done">Done</option>
                                 <i class="fas fa-sort-down text-dark"></i></select>

                        </td>
                    </tr><tr>
                        <td>Mostafa</td>
                        <td>Mark@g.f</td>
                        <td>design</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, pariatur?</td>
                        <td className="status">
                            <select>
                                <option value="Pending">Pending</option>
                                <option value="On going">On going</option>
                                <option value="Done">Done</option>
                                 <i class="fas fa-sort-down text-dark"></i></select>

                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default AllServiceList;