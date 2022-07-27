import React from "react";
import Productview from "./productview";
import "./productview.css";
import Vendorheader from "./vendorheader";
import axios from "axios";

// import "./Nav.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import items from "./arr";
import { width } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
// import ReactDOM from 'react-dom/client';

function Productdetails() {
  const [productdetails, setProductdetails] = useState([]);

  

  // fetch product details
  useEffect(() => {
    // console.log(localStorage.getItem("_ID"));
    axios
      .post("/getallproducts", {
        login_id: localStorage.getItem("_ID"),
      })
      .then((res) => {
        setProductdetails(res.data.docs.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      <Vendorheader />
      {/* <div style={{
        backgroundColor: "white",
        padding: "2px",
        justifyContent: "space-around",
       
        border: "2px solid black",
        borderRadius: "10px 10px 10px 10px",
        
      }}>
        <img src="assets/download.png"  height="40" marginLeft="2rem"/>
    </div> */}
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <h3 className="text-center mt-4">PRODUCT DETAILS</h3>
        <div className="d-flex"> 
        <Link
          to="/addproduct"
          className="btn  col-2 mb-2 mt-4 "
          style={{
            marginLeft: "45rem",
            backgroundColor: "grey",
            color: "white",
          }}
          type="button"
        >
          Add Product
        </Link>
        <Link
          to="/vieworder"
          className="btn  col-2 mb-2 mt-4 "
          style={{
            marginLeft: "3rem",
            backgroundColor: "grey",
            color: "white",
          }}
          type="button"
        >
          View Order
        </Link></div>
       
        {/* <Link
          to="/"
          className="btn col-1 mb-4 "
          style={{
            marginLeft: "1rem",
            backgroundColor: "grey",
            color: "white",
          }}
          type="button"
        >
          Exit
        </Link> */}

        <table className="table mt-3 ">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">category</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          {/* {items.map((item, i) => {
            return (
              <Productview
                key={item.id}
                id={item.id}
                imgurl={item.imgurl}
                category={item.category}
                name={item.name}
                details={item.details}
                size={item.size}
              />
            );
          })} */}

          {productdetails?.map((item, i) => {
            return (
              <Productview
                productId={item._id}
                name={item.productname}
                category={item.productcategory}
                imgurl={item.productimage}
              />
            );
          })}
        </table>
        <div className="d-flex mt-4"></div>
      </div>
    </div>
  );
}

export default Productdetails;
