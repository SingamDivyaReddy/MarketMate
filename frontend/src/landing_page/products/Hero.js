import React from "react";
import {Link} from "react-router-dom";

function Hero(){
    return(
        <div className="container border-bottom mb-5">
            <div className="row p-5" style={{ textAlign: "center" }}>
                <h3 className="fs-2">
                    Zerodha Products
                </h3>
                <p className="fs-4 mt-3" style={{fontWeight:"0.25rem"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className="fs-6 mt-2" >Check out our <Link to={"/investment"} style={{textDecoration:"none"}}>investment offerings →</Link></p>
            </div>
        </div>
    );
}

export default Hero;