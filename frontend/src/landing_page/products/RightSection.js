import React from "react";

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-between">
        {/* Text Column */}
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <a href={learnMore}>
            Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-1"></div>
        {/* Image Column */}
        <div className="col-md-5">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default RightSection;