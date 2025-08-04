import React from "react";
import { Link } from "react-router-dom";
function NotFoundPage(){
    return(
        <div className="container mt-5">
            <div className="row text-center">
                <h4>404 couldn't find that page</h4>
                <p>We couldn't find the page you were looking for.</p>
                <p>Visit <Link to='/'>Zerodhas home page</Link></p>

            </div>
        </div>
    );
}
export default NotFoundPage;