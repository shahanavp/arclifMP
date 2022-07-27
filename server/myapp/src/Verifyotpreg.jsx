import React from 'react';

import {BrowserRouter as useState,useNavigate} from 'react-router-dom';
import Vendorheader from './vendorheader';
// import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Verifyotpreg()
{

  const navigate=useNavigate();

  const [otp, setOTP] = useState("");
  const handleOTP = (e) => {
    setOTP(e.target.value);
  };

  let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
headers.append("Access-Control-Allow-Credentials", "true");

headers.append("GET", "POST", "OPTIONS");

const verifyotp = (e) => {
  e.preventDefault();
  console.log("number : ",otp);
  if (otp != "" && otp.length == 6) {
  fetch("/api/verifyOTP", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      phonenumber: otp,
      flag:"register"
    }),
  }).then((res) => {
    console.log("register res :", res);
    navigate("/productdetails");
  });
} else {
  toast.error("Invalid otp !!");
}

};


    return(
      <>
        <section className="vh-100">
          <Vendorheader />
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="assets/bright-sale-presentation-slide-template_1262-19198.webp"
                className="img-fluid" alt="Sample image" />

            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
              
                <div className="form-outline mb-4">
                  <div><h4>Verify OTP</h4></div>
                <label className="form-label" htmlFor="form3Example3">Enter OTP</label>
                  <input type="text"  id="form3Example3" className="form-control"
                    placeholder="" />
                    
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit"  onClick={verifyotp}
                   style={{margin:"15px",paddingLeft: "2.5rem", 
                   paddingRight: "2.5rem",backgroundColor:"black",color:"white"}}
                  >Verify & register </button>
                {/* <Link to="/productdetails"  className="btn "
                    style={{margin:"15px",paddingLeft: "2.5rem", paddingRight: "2.5rem",backgroundColor:"black",color:"white"}}>
                      Verify & register</Link> */}
                  
                </div>
      
              </form>
            </div>
          </div>
        </div>
       
      </section>
 <div>  <ToastContainer /></div>

 </>
    )
}

export default Verifyotpreg;