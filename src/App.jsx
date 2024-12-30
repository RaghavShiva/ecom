import React, { useState } from 'react'
import Navbar from './components/navbar'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItems from './components/SearchItems'
import Cart from './components/cart'
import Account from './components/Account'
import { items } from './components/data'

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