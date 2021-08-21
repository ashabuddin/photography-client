import React from 'react';

const OrderList = ({ order }) => {
    const { name, price, imageURL, } = order.product

    return (
        <div className="col-md-6">
             <div className="mb-3" style={{ maxWidth: '540px' }}>
                <div className="row">
                    <div className="my-auto">
                        <img src={imageURL} alt="" />
                    </div>
                    <>
                        <div className="body">
                            <div className="title">{name}</div>
                            <div className="text">
                                <ul type="none">
                                    
                                   
                                    <li>${price}</li>
                                </ul>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default OrderList;