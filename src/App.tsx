import './App.css'
import Footer from './components/Footer'
import Home from './components/Home';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import Address from './components/Address';
import OrderPlaced from './components/OrderPlaced';

function App() {
  return (
    <CartProvider>
    <div className='bg-dark text-white d-flex flex-column min-vh-100'>
      <Navbar />
      <main className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/address' element={<Address />}></Route>
          <Route path='/orderplaced' element={<OrderPlaced />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
    </CartProvider>
  )
}

export default App
