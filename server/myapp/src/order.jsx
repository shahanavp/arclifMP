import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Vendorheader from './vendorheader';
// import ReactDOM from 'react-dom/client';
function Order()
{
    return(
        <div>
            <Vendorheader />
            {/* <h2 style={{marginTop:"15rem",marginLeft:"30rem"}}>Order Successful !!!</h2> */}
            <div>
        {/* <div className='nav' style={{ width:"80rem",height:"1rem"}}>
        </div> */}
        <div className='text-center' style={{margin:"2rem"}}>
            <h2>Delivery to :</h2>
            <h6>address of the user</h6>
            <h1>Amount :</h1>
            <h6>Amount to be paid</h6>


        </div>
        <div className='text-center' >
            <h3>Select the payment method </h3>
        </div>
        <div className='d-flex  justify-content-center'>
        <table className='table table-bordered text-center w-50 '>
            <tbody>
                <tr>
                <td>
                <div className="form-check text-center" >
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1"> UPI </label>
                </div>
                </td>
                </tr>
                <tr>
                <td>
                <div className="form-check text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                <label className="form-check-label" for="flexRadioDefault2">Wallet</label></div>
                </td>
                </tr>
                <tr>
                <td> 
                <div className="form-check text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                <label className="form-check-label" for="flexRadioDefault3">Credit/Debit/ATM card</label></div></td>
                </tr>
                <tr>
                <td>
                <div className="form-check text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                <label className="form-check-label" for="flexRadioDefault4">Net Banking</label></div></td>
                </tr>
                <tr>
                <td>
                <div className="form-check text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                <label className="form-check-label" for="flexRadioDefault5">Cash on Delivery</label></div>
                </td>
                </tr>
            </tbody>
        </table>
        </div>
       

        <div>
        <Link to="/demo" class="btn btn-success d-flex mx-auto " style={{width:"200px"}}>Proceed to Pay</Link>
        
        </div>
        
        </div>
        </div>
       
    )
}

export default Order; 