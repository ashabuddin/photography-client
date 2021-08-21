import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';

const Checkout = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [_id])

    const handleCheckout = () => {
        const newBooking = { ...loggedInUser, orderTime: new Date() };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div>
            <h2>Checkout: {loggedInUser.email}</h2>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 shadow px-4 pt-4 my-4" style={{ borderRadius: "15px" }}>
                    <div hover responsive>
                        <div>
                            <h4>Title: {service.name}</h4>
                            <p>Price:${service.price}</p>
                            <p>Description: {service.description}</p>
                        </div>
                    </div>
                    <div className=" text-left">
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;