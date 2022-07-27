import React from "react";
import "./Registerform.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// import ReactDOM from 'react-dom/client';
function Registerform() {
  return (
    <section className="body">
      <div className="container py-5 ">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-9 col-xl-10">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderradius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                  Registration Form
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control"
                        />
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          className="form-control form-control"
                        />
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="date"
                          className="form-control form-control"
                          id="birthdayDate"
                        />
                        <label htmlFor="birthdayDate" className="form-label">
                          Date of Birth
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="femaleGender"
                        >
                          Female
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="maleGender"
                        >
                          Male
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="option3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="otherGender"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="housename"
                          className="form-control form-control"
                        />
                        <label className="form-label" htmlFor="housename">
                          House name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="streetname"
                          className="form-control form-control"
                        />
                        <label className="form-label" htmlFor="streetname">
                          Street name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-7  mb-4 pb-2">
                      <input type="text" id="city" className="form-control" />
                      <label className="form-label" htmlFor="city">
                        City
                      </label>
                    </div>
                    <div className="col-md">
                      <input
                        type="text"
                        id="district"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="district">
                        District
                      </label>
                    </div>
                    <div className="col-sm">
                      <input type="text" id="zip" className="form-control" />
                      <label className="form-label" htmlFor="zip">
                        Zip
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="state"
                          className="form-control "
                        />
                        <label className="form-label" htmlFor="state">
                          State
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          className="form-control form-control"
                        />
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <label className="form-label select-label">
                        Choose option
                      </label>
                      <select className="select form-control">
                        <option selected disabled>
                          Account type
                        </option>
                        <option value="1">personal</option>
                        <option value="2">business</option>
                      </select>

                      {/* <select className="select form-control-lg">
                        <option value="1" disabled>account type</option>
                        <option value="2">Buyer</option>
                        <option value="3">vendor</option>

                      </select> */}
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <Link
                      to="/vendormain"
                      className="btn "
                      type="submit"
                      style={{ backgroundColor: "black",color:"white" }}
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registerform;
