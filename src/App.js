// === Styles ===
import './App.css';

// === IMPORTS ===
import Navbar from './component/Navbar/Navbar';
import Searchbar from './component/Navbar/Searchbar/SearchBar';
import Home from './component/Home/Home'
import Products from './component/Products/Products'
import Contact from './component/Contact/Contact'
import Cart from './component/Cart/Cart';
import Signup from './component/Authentification/Signup';
import Login from './component/Authentification/Login';
import ResetPassword from './component/Authentification/ResetPassword';
import Footer from './component/Footer/Footer';
import PrivateRoute from './component/PrivateRoute';
import ProfilePanel from './component/Navbar/Panel/ProfilePanel';
import { AuthProvider } from './contexts/AuthContext';
import { useState, useEffect } from 'react';


// === Dependencies 
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import { commerce } from './lib/commerce';
import { ConstructionOutlined } from '@mui/icons-material';


function App() {

  const [cart, setCart] = useState({});
  
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
}

const handleAddToCart = async(productId, quantity, variantData) => {
  const {cart} = await commerce.cart.add(productId, quantity, variantData)
  setCart(cart);
}

const handleUpdateCartQty = async (productId, quantity) => {
  const {cart} = await commerce.cart.update(productId, {quantity});
  setCart(cart)
}

const handleRemoveFromCart = async (productId) => {
  const {cart} = await commerce.cart.remove(productId);
  setCart(cart)
}

const handleEmptyCart = async () => {
  const {cart} = await commerce.cart.empty();
  setCart(cart)
}


  useEffect(()=>{
      fetchCart();
  }, []);

  return (
    <Router>
      <AuthProvider>
      <div className='pageContainer'>
        <Searchbar totalItems={cart.total_items}/>
        <Navbar/>
        <div className='bodyContainer'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/products/:path' element={<Products onAddToCart={handleAddToCart}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ResetPassword/>}/>
        </Routes>
        </div>
        <Footer/>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
