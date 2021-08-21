import React, { useEffect, useState } from 'react';
import Sideber from '../Sideber/Sideber';

const Delete = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/serviceEvent')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [serviceData])
    
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {

            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    const remainData = serviceData.filter(
                        (service) => service._id !== id
                    );
                    alert("YAY!", "You deleted the services!", "success");
                    setServiceData(remainData);
                }
            });
    }



    return (
        <div className="row">
            <div className='col-md-3'>
                <Sideber/>
            </div>
            <div className='col-md-6'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {serviceData.map((service) => (
                            <tr id="parent">
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(`${service._id}`)}
                                        className="btn btn-danger"
                                    > Delete</button>
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Delete;