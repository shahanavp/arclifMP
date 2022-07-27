
import Cart from './cart';
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pricedetails from "./pricedetails";
import Vendorheader from './vendorheader';
import axios from "axios";
// import ReactDOM from 'react-dom/client';
function Vieworder()
{
  const [productdetails, setProductdetails] = useState([]);
  let grandtotal=0;
  // fetch product details
  useEffect(() => {
    // console.log(localStorage.getItem("_ID"));
    axios
      .post("/getcartproducts")
      .then((res) => {
        console.log("data cart:", res.data.resp);
        setProductdetails(res.data.resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    return(
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
              <b>ORDER DETAILS</b>
            </div>
            <div>
              {productdetails.map((item) => {
                console.log("items:", item);
                 grandtotal=grandtotal+parseInt(item.totalamount)
                return (
                  
                  <div
                    className="row g-0 bg-light mt-2"
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
                          <small className="text-muted">Quantity {item.productquantity}</small>
                        </p>
                        <p
                          style={{ fontSize: "30px", lineHeight: "1rem" }}
                          id="productPrice"
                        >
                          ₹ {item.totalamount}
                        </p>
                       
                      </div>
                     
                      <Link
                      to="/status"
                      style={{
                        height:"2rem",
                        marginRight:"5rem",
                        marginTop: "5rem",
                        backgroundColor:"grey",
                        color:"white",
                        borderRadius:"0.5rem",
                       width:"8rem",
                       textAlign:"center"
                  
                      }}
                      // onClick={()=>removeProduct(item._id)}
                    >view details </Link>
                     
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
  
            {/* <Link
              to="/order"
              className="btn btn-dark "
              style={{ margin: "30px", padding: "5px 100px" }}
            >
              confirm Order
            </Link> */}
          </div>
        </div>
      </div>
    )
}

export default Vieworder;