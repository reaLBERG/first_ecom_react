import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="card text-bg-dark text-white border-0">
          <img src="/assets/bg.jpg" className="card-img" alt="Background" style={{ height: "550px", objectFit: "cover" }} />
          <div className="card-img-overlay justify-content-center">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
