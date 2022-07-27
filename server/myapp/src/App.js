import './App.css';
import Card  from './Card';
import Category from './Category';
import Nav from './Nav';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Demo from "./demo";
import Buy from './buy';
import Cart from './cart';
import Order from './order';
import Upi from './vieworder';
import Pricedetails from './pricedetails';
import Vendormain from './vendormain';
import Register from './Register';
import Registerform from './Registerform';
import Login from './Login';
import Verifyotplog from './Verifyotplog';
import Verifyotpreg from './Verifyotpreg';
import Addproduct from './addproduct';
import Productview from './productview';

import Header from './Header';
import Carousal from './carousal';
import Topoffers from './topoffers';
import Cardoffer from './cardoffer';
import Gardening from './gardening';
import Navsub from './navsub';
import Furniture from './furniture';
import Furniture1 from './furniture1';
import Furnishing from './Furnishing';
import Filter from './filter';
import Homedecor from './homedecor';
import Kitchenware from './kitchenware';
import Shoppingcart from './shoppingcart';
import { UserContext } from './context/context';
import{useState} from 'react'
import Productdetails from './productdetails';
import Vendorsingle from './vendorsingle';
import Sofarecliners from './sofarecliners';
import Bedsmattresses from './bedsmattresses';
import Lighting from './lighting';
import Carpets from './carpets';
import Gardenoutdoor from './gardenoutdoor';
import ViewPro from './viewproduct';
import Editproduct from './editproduct';
import Sidebar from './sidebar';
import Vieworder from './vieworder';
import Status from './Status';



function App() {  
const [commondata, setCommondata] = useState([]);

  return (
    <UserContext.Provider value={{commondata,setCommondata}}>
    <Router >
    <Routes>
    <Route exact path='/' element={<Category />}/>
    <Route exact path='/header' element={<Header />}/>
    <Route exact path='/carousal' element={<Carousal />}/>
    <Route exact path='/nav' element={<Nav />}/>
    <Route exact path='/topoffers' element={<Topoffers />}/>
    <Route exact path='/cardoffer' element={<Cardoffer />}/>
    <Route exact path='/gardening' element={<Gardening />}/>
    <Route exact path='/furniture' element={<Furniture />}/>
    <Route exact path='/furniture1/:furniture' element={<Furniture1 />}/>
    <Route exact path='/sofarecliners/:sofrecliners' element={<Sofarecliners />}/>
    <Route exact path='/bedsmattresses/:bedmattresses' element={<Bedsmattresses />}/>
    <Route exact path='/lighting/:lightng' element={<Lighting />}/>
    <Route exact path='/carpets/:carpet' element={<Carpets />}/>
    <Route exact path='/gardenoutdoor/:gardnoutdoor' element={<Gardenoutdoor />}/>
    <Route exact path='/homedecor/:homdecor' element={<Homedecor />}/>
    <Route exact path='/furnishing' element={<Furnishing />}/>
    <Route exact path='/filter' element={<Filter />}/>
    <Route exact path='/navsub' element={<Navsub />}/>
    <Route exact path='/cart' element={<Cart/>}/>
    {/* <Route exact path='/buy/:id' element={<Buy />}/> */}
    <Route exact path='/buy/:productId' element={<Buy />}/>
    
    <Route exact path='/order' element={<Order />}/>
    <Route exact path='/vieworder' element={<Vieworder />}/>
    <Route exact path='/demo' element={<Demo />}/>
    <Route exact path='/register' element={<Register />}/>
    <Route exact path='/login' element={<Login />}/>
    <Route exact path='/verifyotplog' element={<Verifyotplog />}/>
    <Route exact path='/verifyotpreg' element={<Verifyotpreg />}/>
    <Route exact path='/registerform' element={<Registerform />}/>
    <Route exact path='/vendormain' element={<Vendormain />}/>
    <Route exact path='/productdetails' element={<Productdetails />}/>
    <Route exact path='/vendorsingle/:productId' element={<Vendorsingle />}/>
    <Route exact path='/productview' element={<Productview />}/>
    <Route exact path='/addproduct' element={<Addproduct />}/>
    <Route exact path='/editproduct/:productId' element={<Editproduct />}/>
    <Route exact path='/pricedetails' element={<Pricedetails />}/>
    <Route exact path='/Card' element={<Card />}/>
    <Route exact path='/kitchenware' element={<Kitchenware />}/>
    <Route exact path='/shoppingcart' element={<Shoppingcart />}/>
    <Route exact path='/sidebar' element={<Sidebar />}/>
    <Route exact path='/status' element={<Status />}/>
    </Routes>
    </Router>
    </UserContext.Provider>
  )

}

export default App;
      
