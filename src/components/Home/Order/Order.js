import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';


const Order = () => {
    const { loggedInUser } = useContext(UserContext);
    const [orderDetails, setOrderDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order?email='+loggedInUser.email)
            .then(res => res.json())
            .then(response => {
                setOrderDetails(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [loggedInUser.email])
    return (
        <div>
             <h1 className="text-center" style={{ fontSize: '2rem' }}>Thanks for your order</h1>
                        <h6 className="text-center mb-5">Your Order is being processed</h6>
                        <h5>Order List</h5>
                        <div className="row">
                            {
                                orderDetails.map(order => <OrderList key={order._Id} order={order} />)
                            }
                        </div>
                       
        </div>
    );
};

export default Order;