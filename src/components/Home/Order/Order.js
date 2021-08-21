import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';


const Order = () => {
    const { loggedInUser} = useContext(UserContext);
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
   // const [loading, setLoading] = useState(true);
    useEffect(() => {
      //  fetch('http://localhost:5000/order?email='+loggedInUser.email)
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(result => {
            setBooking(result)
            setLoading(false)
        })
    }, [])
    if(loading)return<h1>LOADING......</h1>
   // if(loading)return<h1>LOADING......</h1>

    return (
        <div>
            
            
            <h5>Order List</h5>
            <div className="row">
                {
                    booking.map(book => <li key={book._id}>Name: {book.name} Email:{book.email}</li>)
                }
            </div>

        </div>
    );
};

export default Order;