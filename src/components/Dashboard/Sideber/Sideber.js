import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sideber.css'

const Sideber = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                { isAdmin && <div>
                        <li>
                            <Link to='/addService'>AddService</Link>
                        </li>
                        <li>
                            <Link to='/delete'>Delete</Link>
                        </li>
                    </div>
                }

            </ul>
        </div>
    );
};

export default Sideber;