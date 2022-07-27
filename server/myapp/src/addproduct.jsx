import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Vendorheader from "./vendorheader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReactDOM from 'react-dom/client';
function Addproduct() {
  const navigate = useNavigate();

  const [pname, setPname] = useState("");
  const [image, setImage] = useState(""); //image name
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [file, setFile] = useState(""); //file storage
  var file_name = "";

  const product = {
    vendor_id: localStorage.getItem("_ID"),
    productname: pname,
    productimage: image,
    productcategory: category,
    productprice: price,
    productsize: size,
  };
  // console.log("product data :", product);

  const handlePname = (e) => {
    setPname(e.target.value);
  };
  const handleImage = (e) => {
    const len=e.target.files[0].name.length;
    setImage(e.target.files[0].name);
    setFile(e.target.files[0]);
    console.log("filename : ", e.target.files[0].name);
    document.getElementById("img").innerHTML="file selected";
    document.getElementById("imgname").innerHTML=e.target.files[0].name.substring(len/2);

  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const addproduct = (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);

      console.log(`filedata: ${data}`);
      axios
        .post(`/upload/${product.vendor_id}`, data)

        .then((response) => {
          // console.log(response);
          file_name = response.data.file.filename;
          // console.log(file_name);
        })
        .catch((err) => {
          console.log("error response/upload :", err);
        });
    } else {
      toast.error("choose image !!");
    }

    if (
      product.vendor_id !== "" &&
      product.productname !== "" &&
      product.productimage !== "" &&
      product.productcategory !== "" &&
      product.productprice !== "" &&
      product.productsize !== ""
    ) {
      axios
        .post("/addproduct", { product: product })
        .then((res) => {
          console.log(res.data.msg);
          if (res.data.msg === "success") {
            navigate(`/productdetails`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Invalid entry !! ");
      console.log("error");
      console.log(product);
    }
  };
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");

  headers.append("GET", "POST", "OPTIONS");
  return (
    <div>
      <Vendorheader />
      {/* <div className="nav" style={{ width: "80rem", height: "1rem" }}></div> */}

      <div className="mt-5" style={{ marginLeft: "300px" }}>
        <form>
          <div className="row mb-3">
            <label for="inputname" className="col-sm-2 col-form-label">
              {" "}
              Product Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputname"
                onChange={handlePname}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className=" col-sm-2 col-form-label " for="inputGroupFile02">
              Product Image
            </label>
            <div className="input-group col-sm-6">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                name="uploadfile"
                style={{display:"none"}}
                onChange={handleImage}
              /> 
              <div style={{border:"1px solid grey",width:"100%",borderRadius:"0.2rem"}}>             
                 <label for="inputGroupFile02" id="img"  style={{backgroundColor:"rgba(128, 128, 128, 0.63)",border:"1px solid grey",padding:"0rem",marginTop:"0.3rem",marginLeft:"5px"}}>click to add </label>
              <span id="imgname"></span>
              </div>
            </div>
          </div>

          <div className="row mb-3 ">
            <label for="category" className="col-sm-2 col-form-label">
              {" "}
              Product category
            </label>
            <div className="col-sm-6">
              <div className="dropdown ">
                <select
                  className="input-group"
                  name="category"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onChange={handleCategory}
                  style={{ height: "2.3rem" }}
                >
                  <option value="">Select category</option>
                  <option value="beds and mattresess">Beds and mattresess</option>
                  <option value="Garden and outdoor">Garden and outdoor</option>
                  <option value="Sofas and recliners">Sofas and recliners</option>
                  <option value="Home Decor">Home decor</option>
                  <option value="furniture">Furniture</option>
                  <option value="lighting">Lighting</option>
                  <option value="carpet">Carpet</option>

                  {/* <option value="furniture">Beds</option>
    <option value="furniture">Mattresses</option>
    <option value="furniture">Dining set</option>
    <var><option value="furniture">Office chairs</option></var>
    <var><option value="furniture">Coffee tables</option></var>
    <var><option value="furniture">Office tables</option></var>
    <option value="furniture" disabled>Decor</option>
    <option value="decor">Homedecor</option>
    <option value="furniture" disabled>furnishing</option>
    <option value="furnishing">Furnishing</option>
   
    <option value="garden"disabled >Gardening store</option>
    <option value="garden" >Tool sets</option>
    <option value="garden" >Live plants</option>
    <option value="garden" >Garden sprayer</option>
    <option value="garden" >plant containers</option> */}
                </select>
                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Kitchenware
                  </a>
                  <a class="dropdown-item" href="#">
                    Furniture
                  </a>
                  <a class="dropdown-item" href="#">
                    Homedecor
                  </a>
                  <a class="dropdown-item" href="#">
                    Furnishing
                  </a>
                  <a class="dropdown-item" href="#">
                    Gardening store
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <label for="inputPrice" className="col-sm-2 col-form-label">
              Product Price
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputPrice"
                onChange={handlePrice}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label for="inputsize" className="col-sm-2 col-form-label">
              Product Size
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputsize"
                onChange={handleSize}
              />
            </div>
          </div>
          <button
            className="btn col-2 mb-4 "
            onClick={addproduct}
            style={{
              marginLeft: "30rem",
              backgroundColor: "black",
              color: "white",
            }}
          >
            ADD
          </button>
          {/* <Link
            to="/vendormain"
            class="btn col-2 mb-4 "
            style={{
              marginLeft: "30rem",
              backgroundColor: "black",
              color: "white",
            }}
            type="button"
          >
            ADD
          </Link> */}
        </form>
      </div>
      <div>
        {" "}
        <ToastContainer />
      </div>
    </div>

    
  );
}

export default Addproduct;
