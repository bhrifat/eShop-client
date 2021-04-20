import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid navBar-design">
        <a className="navbar-brand ms-5" href="/">
          <img
            src="https://cdn.dribbble.com/users/224512/screenshots/2995705/eshop-logo.jpg?compress=1&resize=800x600"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navBar-design"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link active" to="/myOrders">
                Orders
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link active" to="/allOrder">
                Admin
              </Link>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                Deals
              </a>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link active" to="/login">
                <button className="btn btn-success">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
