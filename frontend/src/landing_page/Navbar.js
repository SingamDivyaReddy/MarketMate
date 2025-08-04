import React from "react";
import {Link} from "react-router-dom";
function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white border-bottom  " style={{position:"sticky",top:"0"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="www.google.com" style={{width:"50%"}}><img src="media/Images/logo.svg" alt="Logo"style={{width:"20%"}} className="ml-5 d-block"/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="" role="search">
                            <ul className="navbar-nav  mb-2">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/signup">SignUp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link active" to="/products">
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/support">Support</Link>
                                </li>
                                <li>
                                    <a className="nav-link active" href="www.google.com">
                                        <i class="fa fa-bars" aria-hidden="true"></i>
                                    </a>
                                    
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;