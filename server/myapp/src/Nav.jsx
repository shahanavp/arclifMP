import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import demo from "./demo";
import Card from "./Card";
import "./Nav.css";

function Nav() {
  const furniture = "furniture";
  const sofrecliners = "Sofas and recliners";
  const homdecor = "Home Decor";
  const bedmattresses = "beds and mattresess";
  const lightng = "lighting";
  const carpet = "carpet";
  const gardnoutdoor = "Garden and outdoor";
  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "3px",
        justifyContent: "space-around",
        display: "flex",
        border: "2px solid black",
        borderRadius: "20px 20px 20px 20px",
      }}
    >
      <Link to={`/furniture1/${furniture}`}>
        <img
          src="assets/elegant-dark-apartment-interior-classic-260nw-1067812865.jpg"
          //  src="assets/photo-1556185781-a47769abb7ee.jpg"
          style={{ width: "5rem", height: "5rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black", fontSize: "14px" }}>
          Furniture
        </h6>
      </Link>

      <Link to={`/sofarecliners/${sofrecliners}`}>
        <img
          src="assets/Wakefit-Kent-Coffee-Table.jpg"
          style={{ width: "5rem", height: "5rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black", fontSize: "14px" }}>
          Sofas & Recliners
        </h6>
      </Link>

      <Link to={`/homedecor/${homdecor}`}>
        <img
          // src="assets/indoor-plants-1582229387.webp"
          src="assets/90ac288d3d62f59fcf9bad558bee1a51--animal-head-decor-animal-heads.jpg"
          style={{ width: "5rem", height: "5rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black", fontSize: "14px" }}>
          Homedecor
        </h6>
      </Link>

      <Link to={`/bedsmattresses/${bedmattresses}`}>
        <img
          src="assets/SofiqueenLS_900x.webp"
          // src="assets/54c0d258b4ada_-_07-hbx-mann-o-print-curtains-shubel-0712-s2.webp"
          style={{ width: "5rem", height: "5rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black", fontSize: "14px" }}>
          Beds & Mattresses
        </h6>
      </Link>

      <Link to={`/lighting/${lightng}`}>
        <img
          src="assets/fl34-10001_13_.webp"
          style={{ width: "5rem", height: "5rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black", fontSize: "14px" }}>
          Lighting
        </h6>
      </Link>
      <Link to={`/carpets/${carpet}`}>
        <img
          src="assets/182-60-modern-quality-carpet-trending-design-hand-woven-fluffy-original-imagcqsmcu5vmpww.webp"
          style={{ width: "5rem", height: "5rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black", fontSize: "14px" }}>
          Carpets
        </h6>
      </Link>
      <Link to={`/gardenoutdoor/${gardnoutdoor}`}>
        <img
          src="assets/indoor-plants-1582229387.webp"
          style={{ width: "5rem", height: "5rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black", fontSize: "14px" }}>
          Garden & outdoor
        </h6>
      </Link>

      {/* <Link to="/demo" ><img src="assets/images1.jpg" 
        style={{width:'7rem',height:'7rem',padding:'5px'}}/>
        <h6 style={{textAlign:'center'}}>Furnishing</h6>
        </Link> */}

      {/*<img src="assets/indoor-plants-1582229387.webp" style={{width:'10rem',height:'10rem',padding:'5px'}}></img> 
         <img src="assets/skybird-tables-ornate-round-golden-coffee-table-set-of-2-31865288622246_1024x1024.jpg" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/Wakefit-Kent-Coffee-Table.jpg" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/54c0d258b4ada_-_07-hbx-mann-o-print-curtains-shubel-0712-s2.webp" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/fl34-10001_13_.webp" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/images1.jpg" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>*/}
    </nav>
  );
}

export default Nav;
