import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [user, setUser] = useState(true);
    const [admin, setAdmin] = useState(true);
    return (
        <div className="sidebar-list">
            <ul>
                {
                    user
                    && <>
                        <li>
                            <Link to="/user/place-order">
                                <i className="fas fa-cart-plus"></i>
                        Place Order
                    </Link>
                        </li>
                        <li>
                            <Link to="/user/service-list">
                                <i className="far fa-list-alt"></i>
                        Service List
                    </Link>
                        </li>
                        <li>
                            <Link to="/user/add-review">
                                <i className="far fa-comment-alt"></i>
                        Add Review
                    </Link>
                        </li>
                    </>
                }

                {
                    admin
                    && <>
                        <li>
                            <Link to="/admin/service-list">
                                <i className="far fa-list-alt"></i>
                        Service List
                    </Link>
                        </li>
                        <li>
                            <Link to="/admin/add-service">
                                <i className="fas fa-plus"></i>
                        Add Service
                    </Link>
                        </li>
                        <li>
                            <Link to="/admin/make-admin">
                                <i className="fas fa-user-plus"></i>
                        Make Admin
                    </Link>
                        </li>
                    </>
                }

            </ul>
        </div>
    );
};

export default Sidebar;