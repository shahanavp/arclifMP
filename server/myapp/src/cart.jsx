import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import Pricedetails from "./pricedetails";
import Vendorheader from "./vendorheader";

import axios from "axios";

function Cart() {
  // const [count, setCount] = useState(4);

  const [productdetails, setProductdetails] = useState([]);
  let grandtotal = 0;
  // fetch product details
  useEffect(() => {
    // console.log(localStorage.getItem("_ID"));
    axios
      .post("/getcartproducts")
      .then((res) => {
        console.log("data cart:", res.data.resp);
        setProductdetails(res.data.resp.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeProduct = (id) => {
    // alert(" Delete cart!!!!")
    axios
      .post("/deletecart", {
        id: id,
      })
      .then((res) => {
        if (res.data.msg === "success") {
          window.location.href = "/cart";
          // alert("success")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const price =item.totalamount;

  return (
    <div>
      <Vendorheader />
      {/* <div className="nav" style={{ width: "80rem", height: "1rem" }}></div> */}

      <div
        className="d-flex flex-row "
        style={{ height: "20rem", margin: "20px" }}
      >
        <div
          className="p-2 bd-highlight  text-bg-light mb-3 "
          style={{ width: "50rem", height: "25rem" }}
        >
          <div className="card-header">
            {" "}
            <b>My Cart</b>
          </div>
          <div>
            {productdetails?.map((item) => {
              console.log("items:", item);
              grandtotal = grandtotal + parseInt(item.totalamount);
              return (
                <div
                  className="d-flex justify-content-between bg-light mt-2 "
                  style={{ margin: "0rem" }}
                >
                  <div className="col-md-3">
                    <img
                      src={`/assets/${item.cart[0].productimage}`}
                      // src="assets/photo-1561030144-775b0ba95af6.avif"
                      className="img-fluid rounded-start"
                      style={{
                        margin: "1rem",
                        width: "10rem",
                        height: "10rem",
                      }}
                      alt=" image not available"
                    />
                  </div>

                    <div className="card-body justify-content-end">
                      <h5 className="card-title">{item.cart[0].productname}</h5>
                      <p className="card-text">
                        <small className="text-muted">
                          Quantity {item.productquantity}
                        </small>
                      </p>
                      <p
                        style={{ fontSize: "30px", lineHeight: "1rem" }}
                        id="productPrice"
                      >
                        ₹ {item.totalamount}
                      </p>
                    </div>
                    
                    <input
                      className="btn mb-4 mr-5"
                      style={{
                       
                        marginTop: "5rem",
                        backgroundColor: "grey",
                        color: "white",
                        height:"2.5rem",
                        textAlign: "center",
                      }}
                      type="button"
                      value="Remove"
                      onClick={() => removeProduct(item._id)}
                    />

                    {/* <div className="mt-5 " style={{ marginLeft: "10rem" }}>
                <div className="close btn-lg " aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </div>
              </div> */}
                 
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ margin: "1rem" }}></div>

        <div>
          <div>
            {" "}
            {/*className="p-2 bd-highlight card border " style={{ width: "25rem", height: "19rem" }} */}
            {/* <Pricedetails price={price} quantity={count} /> */}
            <Pricedetails grandtotal={grandtotal} />
            {/* <div className="card-header bg-transparent border=1px"><b>PRICE DETAILS</b></div>
    <div className="card-body ">
    <p className="card-text"> Price</p>
    <p>Discount</p>
    <p>Delivery</p>
    </div>
    <div className="card-footer bg-transparent border=1px"><b>Total Amount :</b></div>
    </div> */}
          </div>

          <Link
            to="/order"
            className="btn btn-dark "
            style={{ margin: "30px", padding: "5px 100px" }}
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
