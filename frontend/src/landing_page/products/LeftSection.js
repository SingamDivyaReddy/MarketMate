import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  py-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-1"></div>
        <div className="col-md-5 mb-4 mb-md-0">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
        <div className="col-md-1"></div>
        {/* Text Content Column */}
        <div className="col-md-4">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          
          {/* Action Links */}
          <div className="d-flex mb-4">
            <a href={tryDemo} className="me-5">
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore}>
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* App Store Badges */}
          <div className="d-flex">
            <a href={googlePlay} className="me-4">
              <img src="media/Images/googlePlayBadge.svg" alt="Get it on Google Play" style={{height: "40px"}}/>
            </a>
            <a href={appStore}>
              <img src="media/Images/appstoreBadge.svg" alt="Download on the App Store" style={{height: "40px"}}/>
            </a>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default LeftSection;