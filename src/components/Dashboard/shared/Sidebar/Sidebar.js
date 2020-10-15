import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const { loggedInUser, admin } = useContext(UserContext);
    const [user, setUser] = useState(true);
    // const [admin, setAdmin] = useState(false);

    // If admin is logged in, update user state
    useEffect(() => {
        if (admin) setUser(!user)
    }, [])
    console.log(user, admin)

    return (
        <div className="sidebar-list">
            <ul>
                {
                    !admin
                        ? <>
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
                        :
                        <>
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