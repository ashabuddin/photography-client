import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="shop" className="mb-5">
      <div className="banner-area d-flex align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <h5 className="slider-text">Creative Photography <br />Service</h5>
            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing cum <br />Lorem ipsum dolor, consectetur adipisicing.</p>
            <button className="btn-area">Find more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;