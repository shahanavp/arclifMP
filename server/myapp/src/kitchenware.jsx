import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
import Cardoffer from "./cardoffer";
// import ReactDOM from 'rea
// import ReactDOM from 'react-dom/client';
function Kitchenware() {
  return (
    <div>
      <Header />
      <Navsub />
      <div>
        <img
          src="assets/15535d82d16bc16f51f59a23acb1f050.jpg"
          style={{
            width: "78rem",
            height: "400px",
            margin: "10px",
            borderRadius: "30px 30px 30px 30px",
          }}
        />

        <div className="mt-5 text-center" style={{ fontFamily: "cursive" }}>
          <h3>SHOP BY CATEGORY</h3>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
          <div class="col">
            <div class="card h-100 ">
              <img
                src="assets/fe5e11aafdb33c06d3248d71c2ae4a5c.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
              <a class="card-title " href="/Card"><div className="text-center font-weight-bold text-dark">COOKWARE</div></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="assets/PH185071.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
              <a class="card-title "><div className="text-center font-weight-bold text-dark">SERVEWARE</div></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="assets/1431551165056.jpeg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a class="card-title "><div className="text-center font-weight-bold text-dark">KITCHEN TOOLS</div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kitchenware;
