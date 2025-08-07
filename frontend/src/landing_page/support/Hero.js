import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      <div className="row p-3 m-3">
        <div className="col-12 p-3">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between', // Pushes children to opposite ends
            alignItems: 'center',            // Vertically aligns them in the middle
            padding: '10px',                 // Adds some nice spacing   // A border to see the container's bounds
          }}>
            <h1>Support Portal</h1>
            <a href="google">Track Tickets</a>
          </div>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
        </div>

      </div>
      <div className="row p-3 m-3">
        <div className="col-1 p-3"></div>
        <div className="col-5 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="google">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="google">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
        <div className="col-2 p-3"></div>
        <div className="col-4 p-3">
          <h1 className="fs-3">Quick links</h1>
          <ol>
            <li><a href="google">Track account opening</a></li>
            <li><a href="google">Track segment activation</a></li>
            <li><a href="google">Intraday margins</a></li>
            <li><a href="google">Kite user manual</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
