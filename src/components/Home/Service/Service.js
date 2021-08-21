import React from 'react';
import { useHistory } from 'react-router';



const Service = ({service}) => {
    
    const {name, imageURL, price} = service
    

    const history = useHistory()
    const handleBook = (_id) => {
        history.push(`/checkout/${_id}`);
    }

    return (
        
            <div className="col-md-4">
            <div className="shadow mb-4" style={{ borderRadius: "20px", border: 0 }}>
                <div className="d-flex align-items-center p-2" style={{ maxwidth: "300px", height: "300px"}}>
                    <img
                        className="w-100"
                        style={{ objectFit: "contain", maxHeight: "300px" }}
                        variant="top"
                        src={imageURL}
                    />
                </div>
                <div className="card-body pb-0">
                    <div className="card-title" as={"h4"} >{name}</div>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div
                        as={"h2"}
                        className="mb-1"
                        style={{ fontWeight: "600", color: "#FF4B2B"}}>
                        ${price}
                    </div>
                    <div className="row">
                    <button
                        onClick={() => handleBook(service._id)}
                        to="checkout"
                      
                        className="buy-btn shadow-none">
                        Buy Now
                    </button>
                    </div>
                </div>
            </div>
        </div >
        
    );
};

export default Service;