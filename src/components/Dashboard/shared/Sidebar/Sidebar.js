import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/user/place-order">Place order</Link>
                </li>
                <li>
                    <Link to="/user/service-list">Service list</Link>
                </li>
                <li>
                    <Link to="/user/add-review">Add review</Link>
                </li>
                {/* <li>
                    <Link to="/admin/"></Link>
                </li>
                <li>
                    <Link to="/admin/"></Link>
                </li>
                <li>
                    <Link to="/admin/"></Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar;