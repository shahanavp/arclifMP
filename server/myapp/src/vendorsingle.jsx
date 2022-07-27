import axios from "axios";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Vendorheader from "./vendorheader";
// import ReactDOM from 'react-dom/client';
function Vendorsingle() {
  const [singleProduct, setSingle] = useState([]);
  const [singleImage, setImage] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .post("/vendorsingle", { productId: productId })
      .then((res) => {
        setSingle(res.data);
        setImage(res.data.productimage);
        // console.log(singleImage)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const editProduct = (e) => {
    // console.log(e.target.id);
    window.location.href = "/editproduct/" + e.target.id;
  };

  // console.log(productId);

  const removeProduct = (e) => {
    // alert(e.target.id);

    axios
      .post("/vendorsingle/deleteproduct", {
        productId: productId,
      })
      .then((res) => {
        if (res.data.msg === "success") {
          window.location.href = "/productdetails";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Vendorheader />
        {/* <div className="nav" style={{ width: "80rem", height: "1rem" }}></div> */}
        <div className="d-flex" style={{ padding: "2rem" }}>
          <img
            src={`/assets/${singleImage}`}
            alt="unavailable"
            style={{ width: "33rem", height: "27rem" }}
            
          />
          <div className="d-flex flex-column">
            <div
              className="d-flex flex-column  card col-md-6 "
              style={{ width: "75rem", height: "20rem", margin: "20px" }}
            >
              <div className="card-body">
              <p className="card-text" style={{ lineHeight: "1rem" }}>
                 {singleProduct.productcategory}
                </p>
                <h2 className="card-title">{singleProduct.productname}</h2>
                <p className="card-text " style={{ lineHeight: "1rem" }}>
                  special price
                </p>

                <p style={{ fontSize: "35px", lineHeight: "1rem" }}>
                  ₹{singleProduct.productprice}
                </p>
                
                <p className="card-text " style={{ lineHeight: "1rem" }}>
                 Size : {singleProduct.productsize}
                </p>
                {/* <p className="fs-4">
              <b>Available offers</b>
            </p>
            <li className="lh-1">
              No Cost EMI : Avail No Cost EMI on select cards for orders above
              ₹3000
            </li>
            <li>
              Bank Offer: 5% Instant Discount on HSBC Cashback Card
              Transactions{" "}
            </li> */}
              </div>
            </div>
            <div className="mt-5">
              <button
                className="btn  mb-4 "
                style={{
                  marginLeft: "5rem",
                  backgroundColor: "grey",
                  color: "white",
                  padding: "0.5rem 4rem",
                }}
                type="button"
                id={singleProduct._id}
                onClick={editProduct}
              >
                edit
              </button>
              <button
                className="btn mb-4 "
                style={{
                  marginLeft: "1rem",
                  backgroundColor: "grey",
                  color: "white",
                  padding: "0.5rem 4rem",
                }}
                id={singleProduct._id}
                onClick={removeProduct}
                type="button"
              >
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendorsingle;
