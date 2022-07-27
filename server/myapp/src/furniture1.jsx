import React ,{useEffect,useState}from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
// import ReactDOM from 'react-dom/client';



function Furniture1() {
  const {furniture } = useParams();
  const[product,setProductdetails]=useState([])
useEffect(() => {

  axios
    .post("/getallproduct", {
      category:furniture,
    })
    .then((res) => {
      console.log("dataaa : ",res.data.docs)
      setProductdetails(res.data.docs);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  return (
    
    <div>
      <Header />
      <Navsub />
      
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
          Furniture can be a product of design and can be considered a form of decorative art.
           In addition to furniture's functional role, it can serve a symbolic or religious purpose. 
           It can be made from a vast multitude of materials, including metal, plastic, and wood. Furniture 
           can be made using a variety of woodworking joints which often reflects the local culture.
          </div>
          <div className="p-3">
            <h3>FURNITURES</h3>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="font-weight-bold p-2">SORT BY</div>
              <a className="p-2 bd-highlight text-dark">Popularity</a>
              <a className="p-2 bd-highlight text-dark">Price low-high</a>
              <a className="p-2 bd-highlight text-dark">Price high-low</a>
              <a className="p-2 bd-highlight text-dark">Newest first</a>
              <hr className="dropdown-divider" />
            </div>
          </div>
          <div className="row p-4 mt-1">
          {product.map((item)=>
          {return(
            <div className="card col-md-3"style={{ width: "18rem" }}>
             <img
              style={{ height: "150px" }}
              // src={item.productimage}
              src= {`/assets/${item.productimage}`}
              className="card-img-top mt-2"
              alt="image unavailable"
            />
           <div className="card-body">
              <h5 className="card-title">{item.productname}</h5>
              <ReactStars size={15} isHalf={true} />
              <p className="card-text">₹ {item.productprice}</p>
              <Link to={`/buy/${item._id}`} className="btn btn-primary">
                Buy now
              </Link> 
              </div>
         
           {/* <p>{item.productcategory}</p> */}
           
           {/* <p>{item.productsize}</p> */}
           </div>
           )}    
          )}
          </div>

          <div className="p-4 mt-1">

            <Card />
          </div>

        </div>


      </div>
    </div>
  );
}

export default Furniture1;