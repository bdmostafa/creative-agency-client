import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-list">
            <ul>
                <li>
                    <Link to="/user/place-order">
                        <i class="fas fa-cart-plus"></i>
                        Place order
                    </Link>
                </li>
                <li>
                    <Link to="/user/service-list">
                    <i class="far fa-list-alt"></i>
                        Service list
                    </Link>
                </li>
                <li>
                    <Link to="/user/add-review">
                    <i class="far fa-comment-alt"></i>
                        Add review
                    </Link>
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