import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const { admin } = useContext(UserContext);

    return (
        <div className="sidebar-list">
            <ul>
                {
                    !admin
                        ? <>
                            <li>
                                <Link to="/dashboard/user/place-order">
                                    <i className="fas fa-cart-plus"></i>
                                    Place Order
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/user/service-list">
                                    <i className="far fa-list-alt"></i>
                                    Service List
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/user/add-review">
                                    <i className="far fa-comment-alt"></i>
                                    Add Review
                                </Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/dashboard/admin/all-service-list">
                                    <i className="far fa-list-alt"></i>
                                     All Service List
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/admin/add-service">
                                    <i className="fas fa-plus"></i>
                                    Add Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/admin/make-admin">
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