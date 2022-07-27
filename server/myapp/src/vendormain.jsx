import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Productview from "./productview";
import items from "./arr";
import Category from "./Category";
import Nav from "./Nav";

// import ReactDOM from 'react-dom/client';
function Vendormain() {
  const view = () => {
    document.getElementById("abc").style.display = "block";
  };
  return (
    <div>
      <div className="nav" style={{ width: "80rem", height: "1rem" }}></div>

      <button
        class="btn col-3 mt-5 "
        style={{
           
          marginLeft: "30rem",
          marginBottom:"50px",
          backgroundColor: "black",
          color: "white",
        }}
        type="button"
        onClick={view}
      >
        View by category
      </button>

      <div id="abc" style={{ display: "none" }}>


      <nav
      style={{
        backgroundColor: "white",
        padding: "4px",
        justifyContent: "space-around",
        display: "flex",
        border: "1px solid black",
        borderRadius: "10px 10px 10px 10px",
        marginLeft:"35px",
        marginRight:"35px"
        
      }}
    >
      <Link to="/productdetails">
        <img
         src="assets/photo-1556185781-a47769abb7ee.jpg"
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black"}}>kitchenware</h6>
      </Link>
      <Link to="/productdetails">
        <img
        src="assets/Wakefit-Kent-Coffee-Table.jpg"
          
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Furniture</h6>
      </Link>

      <Link to="/productdetails">
        <img
         
          src="assets/fl34-10001_13_.webp"
          
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Home decor</h6>
      </Link>

      <Link to="/productdetails">
        <img
          src="assets/54c0d258b4ada_-_07-hbx-mann-o-print-curtains-shubel-0712-s2.webp"
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Furnishing</h6>
      </Link>

      <Link to="/productdetails">
        <img
         src="assets/indoor-plants-1582229387.webp"
         
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Gardening store</h6>
      </Link>

      </nav>

        {/* <div>
                    <table className='table mt-5' >
                        <thead>
                            <tr><th >PRODUCT DETAILS</th>
                            </tr>
                        </thead>
                        {items.map((item, i) => {
                            return (
                                <Productview
                                    key={item.id}
                                    id={item.id}
                                    imgurl={item.imgurl}
                                    name={item.name}
                                    details={item.details}
                                />)
                        })}
                    </table>
                </div>


                <div className='d-flex'>
                    <Link to="/addproduct" class="btn  col-2 mb-4 " style={{ marginLeft: "50rem",backgroundColor:"grey",color:"white" }} type="button">Add Product</Link>
                    <Link to="/" class="btn col-1 mb-4 " style={{ marginLeft: "1rem",backgroundColor:"grey",color:"white" }} type="button">Exit</Link>
                </div> */}
      </div>
    </div>
  );
}

export default Vendormain;
