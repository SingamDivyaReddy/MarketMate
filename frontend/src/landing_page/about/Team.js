import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row mt-5 border-top mb-5">
                <h2 className="text-center mt-3">People</h2>
                <div className="col-2 mt-3"></div>
                <div className="col-3 mt-3" style={{
                    lineHeight: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <img src="media/Images/nithinKamath.jpg" alt="nithinkamath" style={{ borderRadius: "50%", width: "80%" }} />
                    <h4 className="text-center mt-3">Nithin Kamath</h4>
                    <h5 className="text-center mt-2">Founder, CEO</h5>
                </div>
                <div className="col-5 mt-3" style={{ lineHeight: "2rem" }}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="https://nithinkamath.me/">Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> / <a href="https://x.com/Nithin0dha">Twitter</a></p>
                </div>
                <div className="col-2 mt-3"></div>
            </div>
        </div>
    );
}
export default Team;