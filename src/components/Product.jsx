import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";
import "../App.css";

const Product = () => {
  const [filter, setFilter] = useState("All");
  const cardItem = (item) => {
    return (
      <div className="card card-custom my-3 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt={item.title} style={{ height: "300px" }} />
        <div className="card-body text-center">
          <h5 className="card-title" style={{ height: "2.6em", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}...</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/first_ecom_react/product/${item.id}`} className="btn btn-outline-dark btn-buy">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="buttons d-flex flex-wrap justify-content-center justify-content-md-center"> 
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => setFilter("men's clothing")}
          >
            For Men
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => setFilter("women's clothing")}
          >
            For Women
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => setFilter("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => setFilter("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="row justify-content-around">
          {DATA.filter(
            (item) => filter === "All" || item.category === filter
          ).map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Product;
