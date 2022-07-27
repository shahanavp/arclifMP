import * as React from "react";
import Vendorheader from "./vendorheader";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Order placed',
  'Payment',
  'Item packed',
  'Item delivered'
];

function Status() {
  return (
    <div>
      <Vendorheader />
      <div className="d-flex flex-column">

      <Box sx={{ width: '50%' ,marginLeft:"17rem",marginTop:"3rem"}}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

      {/* <div className="progress mt-5 "style={{marginLeft:"15rem",marginRight:"15rem"}}>
          <div
            className="progress-bar "
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width:"25%"}}
          >
            25%
          </div>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width:"25%"}}
          >
            25%
          </div>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width:"25%"}}
          >
            25%
          </div>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width:"25%"}}
          >
            25%
          </div>
        </div> */}

        <div className="card mt-5 ml-5" style={{ width: "92%" }}>
          <div className="card-body">
            <h5 className="card-title">ORDER TO : </h5>
            <h6
              className="card-subtitle mb-2 text-muted "
              style={{ lineHeight: "3rem" }}
            >
              Shipping address
            </h6>
            <p className="card-text" style={{ lineHeight: "0.5rem" }}>
              Thottathil(h){" "}
            </p>
            <p className="card-text" style={{ lineHeight: "0.5rem" }}>
              Muriyanal{" "}
            </p>
            <p className="card-text" style={{ lineHeight: "0.5rem" }}>
              Kunnamangalam (p.o){" "}
            </p>
            <p className="card-text" style={{ lineHeight: "0.5rem" }}>
              673571{" "}
            </p>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ lineHeight: "3rem" }}
            >
              Payment Status
            </h6>
            <p className="card-text" style={{ lineHeight: "0.5rem" }}>
              Total Amount : ₹13000{" "}
            </p>
            <p
              className="card-text text-success"
              style={{ lineHeight: "0.5rem" }}
            >
              Payment Successful
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Status;
