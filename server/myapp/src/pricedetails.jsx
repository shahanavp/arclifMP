import React from "react";
// import ReactDOM from 'react-dom/client';
function Pricedetails(props) {
  const grandtotal = props.grandtotal;
  // const quantity = props.quantity;
  // const totalPrice = price * quantity;
  // const discount = Math.floor(totalPrice * 0.1);
  // const totalAmount = totalPrice - discount;

  return (
    // <div className="p-2 bd-highlight card border  col-md-10" style={{width:"25rem", height:"20rem"}}>

    <div className='card  mb-3" '>
      <div className="card-header bg-transparent border=1px">
        <b>PRICE DETAILS</b>
      </div>
      <div className="card-body ">
        <div className="d-flex justify-content-between">
          <p className="card-text"> Price </p>
          <p className="card-text">{"₹ " + grandtotal}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="card-text"> Delivery charge</p>
          <p className="card-text text-success"> FREE</p>
        </div>
        {/* <div className="d-flex justify-content-between">
          <p className="card-text"> Discount </p>
          <p className="card-text">{"₹ " + discount}</p>
        </div> */}
      </div>
      <div className="card-footer bg-transparent border=1px d-flex justify-content-between">
        <p className="card-text"> Total Amount </p>
        <b className="card-text "style={{marginLeft:"8rem"}}>{"₹ " + grandtotal}</b>
      </div>
    </div>
  );
}

export default Pricedetails;
