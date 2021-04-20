import React from "react";
import Products from "../Products/Products";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="m-5">
        <h3 className="text-center greet">Welcome to eShop</h3>
        <div className="d-flex justify-content-center">
          <input
            className="form-control"
            type="text"
            placeholder="Search here"
          />
          <button className="btn btn-success">Go</button>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
