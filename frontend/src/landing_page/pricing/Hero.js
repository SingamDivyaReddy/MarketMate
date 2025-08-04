import React from "react";

function Hero(){
    return(
        <div className="container mb-5">
            <div className="row border-bottom text-center mt-5 mb-5">
                <h2>Pricing</h2>
                <p className="mb-5 mt-3">Free equity investments and flat <i class="fa fa-inr" aria-hidden="true"></i>20 trady and F&O trades</p>
            </div>
            <div className="row">
                <div className="col-4 text-center p-3">
                    <img src="media\Images\pricing0.svg" alt="RandomImage" style={{width:"70%"}}/>
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 text-center p-3">
                    <img src="media\Images\intradayTrades.svg" alt="RandomImage" style={{width:"70%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 text-center p-3">
                    <img src="media\Images\pricing0.svg" alt="RandomImage" style={{width:"70%"}}/>
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Hero;