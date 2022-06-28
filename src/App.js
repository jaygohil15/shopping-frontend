import './App.css';
import Navbar from './pages/navbar'
import ProductList from './pages/productList/productList'
import Cart from './pages/cart/cart'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
