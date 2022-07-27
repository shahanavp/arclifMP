import { height } from "@mui/system";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
// import ReactDOM from 'react-dom/client';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <p className="navbar-brand">
          <img
          src="/assets/download.png"
            // src="assets/shopping-cart-icon-flat-design-260nw-570153007.jpg"
            alt=""
            // width="40"
            height="40"
            className="d-inline-block align-text-top "
          />
          <span className="ml-2 mt-3"> | MARKET PLACE</span>
        </p>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: "12rem" }}
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="/register"
              >
                Become a seller
              </a>
            </li>
            <li className="p-3"></li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Notification preference
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    24x7 customer care
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Advertise
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Download app
                  </a>
                </li>
              </ul>
            </li>
            <li className="p-3"></li>
          </ul>
          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-dark  "
              type="submit"
              style={{ height: "35px" }}
            >
              Search
            </button>

            <Link to="/cart"
              className="btn-sm d-flex "
              style={{ marginLeft: "6rem", backgroundColor: "black", height:"35px"}}
            >
              <img
                src="/assets/shopping-cart-icon-on-black-background-black-flat-vector-26849304.jpg"
                width="25"
                height="25"
                style={{ backgroundcolor: "black" }}
              ></img>
              <h6
                className="badge ml-1 mt-1 "
                style={{ color: "white", fontSize: "11px" }}
              >
                Cart
              </h6>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;

