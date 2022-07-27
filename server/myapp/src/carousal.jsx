import React from "react";
// import ReactDOM from 'react-dom/client';
function Carousal() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      
      data-bs-ride="carousel"
      style={{ padding: "20px", dataInterval:"10"}}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="assets/made_carousel.png"
            className="d-block "
            alt=""
            style={{ width: "80rem", height: "400px" }}
          />
        </div>
        <div className="carousel-item ">
          <img
            src="assets\carousal2.png"
            className="d-block "
            alt="..."
            style={{ width: "80rem", height: "400px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="assets/DSC5553.jpg"
            className="d-block "
            alt="..."
            style={{ width: "80rem", height: "400px" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;
