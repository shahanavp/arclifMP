import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Vendorheader from "./vendorheader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ReactDOM from 'react-dom/client';
function Login() {
  const navigate = useNavigate();

  const [number, setNumber] = useState("");

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  //  const sentotp = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:5001/api/sendOTP", {
  //       phonenumber: number,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");

  headers.append("GET", "POST", "OPTIONS");

  const sentotp = (e) => {
    e.preventDefault();

    console.log("number : ", number);

    if (number != "" && number.length == 10) {
      if (number.length == 10) {
        fetch("/api/sendOTP", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phonenumber: number,

            flag: "login",
          }),
        }).then((res) => {
          const data = res.json();
          data.then((data) => {

            console.log(data);
            console.log("hash :",data.hash)

            console.log("phone :",data.phone)
            localStorage.setItem("PHONE",data.phone);
            localStorage.setItem("HASH",data.hash);
            navigate(`/verifyotplog`);
          });

          // navigate("/verifyotplog");
        });
      }
    } else {
      toast.error("Invalid phone number !!");
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
                // src="assets/images.png"
                src="assets/bright-sale-presentation-slide-template_1262-19198.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={sentotp}>
                <div className="form-outline mb-4">
                  <div>
                    <h4>Login</h4>
                  </div>
                  <label className="form-label" htmlFor="form3Example3">
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    id="form3Example3"
                    className="form-control "
                    placeholder="Enter your number "
                    onChange={handleNumber}
                    required
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  {/* <Link to="/verifyotplog" className="btn " onClick={sentotp}
                                    style={{ margin: "15px", paddingLeft: "2.5rem", paddingRight: "2.5rem", backgroundColor: "black",color:"white" }}>
                                        Send OTP</Link> */}
                  <button
                    type="submit"
                    onClick={sentotp}
                    style={{
                      margin: "15px",
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Send OTP
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Not registered ?
                    <Link to="/register" className="link-danger">
                      Register
                    </Link>
                  </p>
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

export default Login;
