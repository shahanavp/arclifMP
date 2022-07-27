import React from 'react';
import ReactDOM from 'react-dom/client';
import './Category.css';
import Nav from "./Nav";
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Carousal from './carousal';
import Topoffers from './topoffers';
import Cardoffer from './cardoffer';


function Category() {
    return(
        <div className="">
        
            <Header />
            <Nav />
            <Carousal />
            <Cardoffer />
            <div className='main' >
            <h3 className='heading'> MARKET PLACE </h3>
            <p className='sub'>EVERYTHING YOU NEED</p>
             </div>
            <Topoffers />
             

             {/* <Link to="/register" className='text' >
                <label>vendor login</label>
            </Link> */}
            
        </div>
        
       
    );
}

export default Category; 