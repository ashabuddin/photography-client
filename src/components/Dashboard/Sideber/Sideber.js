import React from 'react';
import { Link } from 'react-router-dom';
import './Sideber.css'

const Sideber = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/addService'>AddService</Link>
                </li>
                <li>
                    <Link to='/delete'>Delete</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sideber;