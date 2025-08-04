import React from "react";

function Awards(){
    return(
        <div className="container p-5">
            <div className="row ">
                <div className="col-6">
                    <img src="media/Images/largestBroker.svg" alt="LargestBroker" />
                </div>
                <div className="col-6 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li className="p-2">Futures and Options</li>
                                <li className="p-2">Commodity derivatives</li>
                                <li className="p-2">Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="p-2">Stocks & IPOs</li>
                                <li className="p-2">Direct mutual funds</li>
                                <li className="p-2">Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/Images/pressLogos.png" alt="pressLogos" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;