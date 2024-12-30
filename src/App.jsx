import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import SearchItems from './components/SearchItems.jsx'
import Cart from './components/cart.jsx'
import Account from './components/Account.jsx'
import { items } from './components/data.jsx'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Products cart={cart} setCart={setCart} items={data} />}></Route>
          <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart} />}></Route>
          <Route path='/search/:term' element={<SearchItems cart={cart} setCart={setCart} />}></Route>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
          <Route path='/account' element={<Account />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App