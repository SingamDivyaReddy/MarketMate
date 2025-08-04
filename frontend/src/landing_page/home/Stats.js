import React from "react";

function Stats(){
    return(
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-6 p-5 fs-20">
                    <h2 className="mb-5">Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>

                    <h4>No spam or gimmicks</h4>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4>The Zerodha universe</h4>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 text-center">
                    <div>
                        <img src="media/Images/ecosystem.png" alt="ecosystem"style={{width:"80%"}} className="mt-3"/>
                    </div>
                    <div >
                        <a href="www.google.com" style={{textDecoration: "none"}}>Explore our products<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="www.google.com" style={{ marginLeft: '30px',textDecoration: "none" }}>Try Kite demo<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );   
}

export default Stats;