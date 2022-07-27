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
function Sofarecliners() {
  const {sofrecliners} = useParams();
  const[product,setProductdetails]=useState([])
  useEffect(() => {

    axios
      .post("/getallproduct", {
        category:sofrecliners,
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
          The most common types of couches include the two-seater, sometimes referred to as a loveseat, and the 
          sofa. The loveseat is designed for seating two people, while the sofa has more than two cushion seats.
           A sectional sofa, often just referred to as a "sectional", is formed from multiple sections (typically
            two, three, and four) and usually includes at least two pieces which join at an angle of 90 degrees or
             slightly greater. Sectional sofas are used to wrap around walls or other furniture.
          </div>
          <div className="p-3">
            <h3>SOFAS & RECLINERS</h3>
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

export default Sofarecliners;