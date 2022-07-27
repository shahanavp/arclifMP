import React from "react";
import Header from "./Header";
import Navsub from "./navsub";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
function Gardening() {
  return (
    <div>
      <Header />
      <Navsub />
      <div>
        <img
          src="assets/GettyImages-760251429-45356fea1e164fc386157d206e3c2c956.jpg"
          style={{ width: "77rem", height: "400px", margin: "10px" ,borderRadius: "30px 30px 30px 30px"}}
        ></img>
      </div>
      <div className="card text-center">
        <div className="card-header ml-2 ">
          <b>BUDGET BUY</b>
        </div>

        <div className="d-flex">
          <div
            className="card mt-3"
            style={{ width: "18rem", marginLeft: "5rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">-UNDER-</h5>
              <p className="card-text">₹99</p>
              {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
            </div>
          </div>

          <div
            className="card mt-3"
            style={{ width: "18rem", marginLeft: "5rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">-UNDER-</h5>
              <p className="card-text">₹299</p>
            </div>
          </div>

          <div
            className="card mt-3"
            style={{ width: "18rem", marginLeft: "5rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">-UNDER-</h5>
              <p className="card-text">₹999</p>
            </div>
          </div>
        </div>

        <div className="card-header text-center  mt-4">
          <b>SHOP BY CATEGORY</b>
        </div>
        <div className="card-body d-flex">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="assets/grey-ticking-tool-bag.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">TOOLS SETS </h5>
              <p className="card-text">
                <small className="text-small">
                  PRUNER | TROWELS | HEDGE SHEARS | GARDENING FORK
                </small>
              </p>
              <a href="/Card" className="btn btn-dark">
                shop now
              </a>
            </div>
          </div>

          <div className="card ml-4" style={{ width: "18rem" }}>
            <img src="assets/image.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">LIVE PLANTS</h5>
              <p className="card-text">
                <small className="text-small">
                  BAMBOO | BONSAI | INDOOR PLANT | DESK PLANT
                </small>
              </p>
              <a href="#" className="btn btn-dark">
                shop now
              </a>
            </div>
          </div>

          <div className="card ml-4" style={{ width: "18rem" }}>
            <img src="assets/G330i.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">GARDEN SPRAYER</h5>
              <p className="card-text">
                <small className="text-small">
                  SPRINKLERS | WATER PUMB | WATERING CANS
                </small>
              </p>
              <a href="#" className="btn btn-dark">
                shop now
              </a>
            </div>
          </div>

          <div className="card ml-4" style={{ width: "18rem" }}>
            <img
              src="assets/images (2).jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">PLANT CONTAINERS</h5>
              <p className="card-text">
                <small className="text-small">POTS | HANGING PLANTERS</small>
              </p>
              <a href="#" className="btn btn-dark">
                shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gardening;
