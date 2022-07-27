
import { margin } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import ReactStars from "react-rating-stars-component";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams,useNavigate, } from "react-router-dom";
import items from "./arr";
import { UserContext } from "./context/context";
import Vendorheader from "./vendorheader";
import axios from "axios";
// import ReactDOM from 'react-dom/client';

function Buy() {
  const navigate = useNavigate();
  const {productId}=useParams();
  console.log(productId)
 const [singleProduct, setSingle] = useState([]);
  const [singleImage, setImage] = useState([]);
  useEffect(() => {
    axios
      .post("/buyersingle", { productId: productId })
      .then((res) => {
        setSingle(res.data);
        setImage(res.data.productimage);
        // console.log(singleImage)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [count, setCount] = useState(1);

  function decrementCount() {
    if (count>1)
    {
      setCount((prevCount) => count - 1);
    } 
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  const price = singleProduct.productprice;
  const totalPrice = price * count;


  const addproduct = (e) => {
    e.preventDefault();

      axios
        .post("/addproductcart", {
           productId: productId ,
           productquantity:count,
           totalamount:totalPrice})
        .then((res) => {
          console.log(res.data.msg);
          if (res.data.msg === "success") {
            navigate(`/cart`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    
  };

  return (
    <div>
      <Vendorheader/>
      {/* <div className="nav" style={{ width: "80rem", height: "1rem" }}></div> */}
      <div className="d-flex" style={{ padding: "2rem" }}>
        <img
         src={`/assets/${singleImage}`}
          // src="assets/photo-1561030144-775b0ba95af6.avif"
          alt="image unavailable"
          style={{ width: "35rem", height: "30rem" }}
        />
        <div>
          <div
            className="d-flex flex-column  card col-md-6 "
            style={{ width: "75rem", height: "21rem", margin: "20px" }}
          >
            <div className="card-body">
            <h2 className="card-title">{singleProduct.productname}</h2>
              {/* <h2 className="card-title">white and beige flower vase</h2> */}
              <p className="card-text text-muted" style={{ lineHeight: "1rem" }}>
                special price
              </p>
              <p style={{ fontSize: "35px", lineHeight: "1rem" }}>₹{singleProduct.productprice}</p>
              {/* <p style={{ fontSize: "35px", lineHeight: "1rem" }}>₹{price}</p> */}
              <ReactStars size={20} isHalf={true} />
              <p className="card-text" style={{ lineHeight: "1rem" }}>
               size : {singleProduct.productsize}
              </p>
              <div className=" d-flex flex-column mt-3  ">
                <small className="text-muted mb-3">Set the quantity</small>

                <div className="btn-group d-flex ">
                  <button
                    type="button"
                    className="btn-sm btn-dark"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span style={{ margin: "0 1rem" }} id="quantity">
                    {count}
                  </span>
                  {/* <input type="text" placeholder='1' size="2">{prevCount}</input> */}
                  <button
                    type="button"
                    className="btn-sm btn-dark"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                <div className="d-flex mt-4">
                <p className="card-text"> Total Amount </p>
                <input type="text " value={"₹ " + totalPrice} style={{width:"10rem",height:"30px",marginLeft:"15px"}}></input>
                {/* <p className="card-text">{"₹ " + totalPrice}</p> */}
                </div>
                
              </div>

              {/* <p className="fs-4">
                <b>Available offers</b>
              </p> */}
              {/* <li className="lh-1">
                No Cost EMI : Avail No Cost EMI on select cards for orders above
                ₹1000
              </li>
              <li>
                Bank Offer: 75% Instant Discount on HSBC Cashback Card
                Transactions{" "}
              </li> */}
            </div>
          </div>
          
          <div className="flex-column " style={{ padding: "0px 200px" }}>
          <button
            className="btn btn-dark col-4"
            onClick={addproduct}
          >
            Add to cart
          </button>
          </div>
        </div>
      </div>
    </div>
    /*<div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary" type="button">Button</button>
    <button class="btn btn-primary" type="button">Button</button>
    </div>*/
  );
}

export default Buy;
