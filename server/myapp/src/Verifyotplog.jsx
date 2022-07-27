import React, { useState, useParams } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Vendorheader from "./vendorheader";
// import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./context/context";

function Verifyotplog() {
  const navigate = useNavigate();
  const hash = localStorage.getItem("HASH");
  const phone = localStorage.getItem("PHONE");

  const [otp, setOTP] = useState("");

  console.log("Phone :", phone);
  console.log("Hash :", hash);

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
    console.log("otp : ", otp);

    if (otp != "" && otp.length == 6) {
      fetch("/api/verifyOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phonenumber: phone,
          hash: hash,
          otp: otp,
          msg: "login",
        }),
      })
        .then((res) => {
          const data = res.json();
          data.then((data) => {
       
            if (data.msg == "login verified") {
              localStorage.setItem("_ID",data.data[0].data[0]._id)
              navigate("/productdetails");
            } else {
              toast.error(`${data.msg}`);
            }
          });
        })
        .catch((err) => {
          toast.error(`error:${err}`);
        });
    } else {
      toast.error("Invalid OTP !! ");
    }
  };

  return (
    <>
      <section className="vh-100">
        <Vendorheader />
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="assets/bright-sale-presentation-slide-template_1262-19198.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <div>
                    <h4>Verify OTP</h4>
                  </div>
                  <label className="form-label" htmlFor="form3Example3">
                    Enter OTP
                  </label>
                  <input
                    onChange={handleOTP}
                    type="text"
                    id="form3Example3"
                    className="form-control"
                    placeholder=""
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    onClick={verifyotp}
                    style={{
                      margin: "15px",
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Verify & login{" "}
                  </button>

                  {/* <Link to="/productdetails"  className="btn "
                    style={{margin:"15px",paddingLeft: "2.5rem", paddingRight: "2.5rem",backgroundColor:"black",color:"white"}}>
                      
                      Verify & login</Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div>
        {" "}
        <ToastContainer />
      </div>
    </>
  );
}

export default Verifyotplog;
