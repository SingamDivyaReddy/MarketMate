import React from 'react';

function Education(){
    return(
        <div className='container mb-5 mt-5 '>
            <div className='row mb-5'>
                <div className='col-4 mb-5'>
                    <img src='media/images/education.svg' alt='education'/>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <h1 className='fs-2 mt-4'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a href='www.google.com' className="mb-5 d-block" style={{textDecoration:"none"}}>Varsity<i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                    <a href='www.google.com' style={{textDecoration:"none"}}>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
    );
}

export default Education;