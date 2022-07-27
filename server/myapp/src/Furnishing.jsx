import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
// import ReactDOM from 'react-dom/client';
function Furnishing() {
  return (
    <div>
      <Header />
      <Navsub />
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
            If you have decided to buy home furnishing online, you’ve landed on
            the right page. From bed linen, curtains, carpets and floor
            covering, cushions to kitchen and bathroom linen, find it all under
            a single roof and at prices that are too hard to resist! Filter
            within colour, pattern, bank offers and discounts for quick
            customised results.
          </div>
          <div className="p-3">
            <h3>HOME FURNISHING</h3>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="font-weight-bold p-2">SORT BY</div>
              <a className="p-2 bd-highlight text-dark">Popularity</a>
              <a className="p-2 bd-highlight text-dark">Price low-high</a>
              <a className="p-2 bd-highlight text-dark">Price high-low</a>
              <a className="p-2 bd-highlight text-dark">Newest first</a>
              <hr className="dropdown-divider" />
            </div>
          </div>
          <div className="p-4 mt-1">
            <Card />
          </div>


        </div>
      </div>
    </div>
  );
}

export default Furnishing;
