import React from 'react';
// import ReactDOM from 'react-dom/client';
function Shoppingcart()
{
    return(
    
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="card-title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>    
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="assets/polyester-liberate-hb-featherlite-original-imafxvg9hpfz2yhq.jpg"/></div>
                            <div className="col">
                                <div className="row text-muted">Shirt</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="assets/photo-1534349762230-e0cadf78f5da.jpg"/></div>
                            <div className="col">
                                <div className="row text-muted">Shirt</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="assets/Wakefit-Kent-Coffee-Table.jpg"/></div>
                            <div className="col">
                                <div className="row text-muted">Shirt</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div className="back-to-shop"><a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    
                    <div className="row">
                        <div className="col" style={{paddingLeft:"0"}}>ITEMS 3</div>
                        <div className="col text-right">&euro; 132.00</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row" style={{borderTop:" 1px solid black", padding:"2rem"}}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div>

    )
}

export default Shoppingcart;