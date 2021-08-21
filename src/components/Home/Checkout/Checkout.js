import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';

const Checkout = () => {  
    const {_id} = useParams();
    const [service, setService] = useState({});
    const [loggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${_id}`)
        .then(res => res.json())
        .then(data =>setService(data))  
    },[_id])

    const handleCheckout = () =>{
      
        const orderDetails = { ...loggedInUser, orderTime: new Date() };

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
   
    return (
        <div>
            <div className="col-md-3"></div>
        <h2>Checkout</h2>
        <div className="col-md-6 shadow px-4 pt-4 my-4" style={{ borderRadius: "15px" }}>
            <table hover responsive>
                <thead>
                    <tr><th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{service.name}</td>
                        <td>${service.price}</td>
                        <td>{service.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="text-right">
            <button onClick={handleCheckout} className="checkout-btn shadow-none">Checkout</button>
        </div>
    </div>
    );
};

export default Checkout;