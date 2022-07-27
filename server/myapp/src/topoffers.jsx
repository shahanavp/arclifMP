import React from "react";
// import ReactDOM from 'react-dom/client';
function Topoffers() {
  return (
    <div className="bg-light">
      <h4 className="text-center mt-4">TOP OFFERS</h4>
      <div className="d-flex ml-5 mt-4">
        <div>
          <div className="card " style={{ width: "18rem", margin: "2px" }}>
            <img src="assets/photo-1610701596061-2ecf227e85b2.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">kitchenware</h5>
              <p className="card-text text-center text-success">min 25% off</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ width: "18rem", margin: "2px" }}>
            <img src="assets/photo-1482350325005-eda5e677279b.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Home lighting</h5>
              <p className="card-text text-center text-success">Extra 5% off</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ width: "18rem", margin: "2px" }}>
            <img src="assets/photo-1518541355664-6ca16f8aacf5.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Mug store</h5>
              <p className="card-text text-center text-success">min 20% off</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ width: "18rem", margin: "2px" }}>
            <img src="assets/photo-1551893133-a7c2b58f59b4.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Hanging planters</h5>
              <p className="card-text text-center text-success">min 10% off</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>

       
        
        
      </div>
    </div>
    
  );
}

export default Topoffers;
