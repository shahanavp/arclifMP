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
import { toast } from "react-toastify";

// import ReactDOM from 'react-dom/client';
function Editproduct() {
  const productId = useParams();
  // console.log(productId);
  const navigate = useNavigate();

  // display current prodyuct details

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .post("/editproduct", { productId: productId })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [pname, setPname] = useState();
  const [image, setImage] = useState(); //image name
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [file, setFile] = useState(); //file storage
  var file_name = "";
  const product = {
    vendor_id: localStorage.getItem("_ID"),
    productname: pname,
    productimage: image,
    productcategory: category,
    productprice: price,
    productsize: size,
  };
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

  const updateProduct = (e) => {
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
          console.log("erroe response/upload :", err);
        });
    } else {
      toast.error("choose image !!");
    }

    axios
      .put("/editproduct", {
        product: product,
        productId: productId,
      })
      .then((res) => {
        if (res) {
          window.location.href = "/productdetails";
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                defaultValue={products.productname}
                onChange={handlePname}
              />
            </div>
          </div>

          {/* <div className="row mb-3">
            <label className=" col-sm-2 col-form-label " for="inputGroupFile02">
              Product Image
            </label>
            <div className="input-group col-sm-6">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
               
                onChange={handleImage}
              />
              <p>
              {products.productimage}
              </p> 
            </div>
          </div> */}
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
                 <label for="inputGroupFile02" id="img" 
                  style={{backgroundColor:"rgba(128, 128, 128, 0.63)",border:"1px solid grey",marginLeft:"5px"}}>click to change image</label>
              <span id="imgname">{products.productimage}</span>
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
                  <option
                    style={{ fontWeight: "bolder" }}
                    value={`${products.productcategory}`}
                  >
                    {products.productcategory}
                  </option>
                  <option value="beds and mattresess">Beds & mattresess</option>
                  <option value="Garden and outdoor">Garden & outdoor</option>
                  <option value="Sofas and recliners">Sofas & recliners</option>
                  <option value="Home Decor">Home decor</option>
                  <option value="furniture">Furniture</option>
                  <option value="lightning">Lighting</option>
                  <option value="carpet">Carpet</option>
                </select>
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
                defaultValue={products.productprice}
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
                defaultValue={products.productsize}
              />
            </div>
          </div>
          <button
            className="btn col-2 mb-4 "
            onClick={updateProduct}
            style={{
              marginLeft: "30rem",
              backgroundColor: "black",
              color: "white",
            }}
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editproduct;
