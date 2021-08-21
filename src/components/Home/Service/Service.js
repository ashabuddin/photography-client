import React from 'react';

const Service = (props) => {
    const {name, image, price} = props.service
    console.log(props.service.image);
    return (
        
            <div className="col-md-4">
            <div className="shadow mb-4" style={{ borderRadius: "20px", border: 0 }}>
                <div className="d-flex align-items-center p-2" style={{ maxwidth: "300px", height: "300px"}}>
                    <img
                        className="w-100"
                        style={{ objectFit: "contain", maxHeight: "300px" }}
                        variant="top"
                        src={image}
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
                    <button
                       
                        to="checkout"
                      
                        className="buy-btn shadow-none">
                        Buy Now
                    </button>
                </div>
            </div>
        </div >
        
    );
};

export default Service;