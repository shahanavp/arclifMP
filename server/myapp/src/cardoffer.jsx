import React from "react";
// import ReactDOM from 'react-dom/client';
function Cardoffer() {
  return (
    <div>
   
    <div className="d-flex">
      
      <div className="card mb-3" style={{ width: "400px",marginLeft:"15px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="assets/like-icon-hand-thumb-up-260nw-1356361679.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">CRAZY DEALS</h5>
              <p className="card-text">Best deal of the sale</p>
              <p className="card-text">
                <small className="text-bold">12AM | 8AM | 4PM </small></p>
                <a href="#" className="btn btn-dark">shop now</a>
              
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ width: "400px",marginLeft:"15px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="assets/download.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-text">But 2, get</h5>
              <p className="card-title">EXTRA 5 % OFF</p>
              <h5 className="card-text">Buy 3, get</h5>
              <p className="card-title">EXTRA 10 % OFF</p>
                <a href="#" className="btn btn-dark">shop now</a>
              
            </div>
          </div>
        </div>
      </div>
      

      <div className="card mb-3" style={{ width: "400px",marginLeft:"15px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="assets/img.jpg"
              className="img-fluid rounded-start"
              alt="image unavailable"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-text">But 3, get</h5>
              <p className="card-title">EXTRA 5 % OFF</p>
              <h5 className="card-text">Buy 5, get</h5>
              <p className="card-title">EXTRA 10 % OFF</p>
                <a href="#" className="btn btn-dark">shop now</a>
              
            </div>
          </div>
        </div>
      </div>



    </div>

    </div>
  );
}

export default Cardoffer;
