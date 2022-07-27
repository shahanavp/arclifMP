import React from "react";
import Header from "./Header";
import Navsub from "./navsub";
// import ReactDOM from 'react-dom/client';
function Furniture() {
  return (
    <div>
      <Header />
      <Navsub />
      <div>
        <img
          src="assets/amazon-rivet-furniture-1533048038.jpg"
          style={{
            width: "78rem",
            height: "400px",
            margin: "10px",
            borderRadius: "30px 30px 30px 30px",
          }}
        ></img>
        <div className="mt-5 text-center" style={{ fontFamily: "cursive" }}>
          <h3>MOST POPULAR CATEGORIES</h3>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
          <div class="col">
            <div class="card h-100 ">
              <img
                src="assets/most-comfortable-sofas-from-amazon.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Sofas</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="assets/istockphoto-1141212809-612x612.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Wardrobes</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="assets/malm-ottoman-bed-black-brown__0594830_pe676181_s5.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Beds</h5>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card h-100">
              <img
                src="assets/61Jm6g34bWL._SL1500_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Mattresses</h5>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card h-100">
              <img
                src="assets/abbey-solid-wood-six-seater-dining-set-with-bench-in-honey-oak-finish-by-woodsworth-abbey-solid-wood-kjfiik.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Dining sets</h5>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card h-100">
              <img
                src="assets/polyester-liberate-hb-featherlite-original-imafxvg9hpfz2yhq.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Office chairs</h5>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card h-100">
              <img
                src="assets/6_c663d428-05e5-4758-ab44-b3c3a8c1b278_1024x1024.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Coffee tables</h5>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card h-100">
              <img
                src="assets/sos-liteoffice-office-table-in-persian-walnut--colour-by-spacewood-sos-liteoffice-office-table-in-pe-kgwxa9.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Office tables</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
