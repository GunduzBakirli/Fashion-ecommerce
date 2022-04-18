import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const basketAllData = useSelector((state) => state.basketReducer);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Monika
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav px-2 mx-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/all-products" className="nav-link">
                  AllProducts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/basket" className="nav-link">
                  Basket
                  <i className="fa-solid fa-basket-shopping px-2"></i>
                  {basketAllData.length}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
