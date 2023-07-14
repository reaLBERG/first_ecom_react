import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/first_ecom_react/" element={<Home/>} />
        <Route exact path="/first_ecom_react/products" element={<Product/>} />
        <Route path="/first_ecom_react/product/:id" element={<ProductDetail/>} />
        <Route exact path="/first_ecom_react/cart" element={<Cart/>} />
        <Route exact path="/first_ecom_react/checkout" element={<Checkout/>} />
        <Route exact path="/first_ecom_react/about" element={<About/>} />
        <Route exact path="/first_ecom_react/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
