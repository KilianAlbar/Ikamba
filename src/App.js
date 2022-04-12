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


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  
  const fetchProducts = async () =>{
    await commerce.products.list({
      limit: 200,
      category_slug: 'carbonate' 
    }).then((data)=>setProducts(data.data));
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
}

const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart);
}

  useEffect(()=>{
      fetchProducts();
      fetchCart();
  }, []);

  return (
    <Router>
      <AuthProvider>
      <div>
        <Searchbar/>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/products/:path' element={<Products addToCart={handleAddToCart} products={products}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ResetPassword/>}/>
        </Routes>
        <Footer/>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
