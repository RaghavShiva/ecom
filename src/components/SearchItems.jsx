import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './data.jsx';
import { useEffect } from 'react';
import Products from './Products.jsx';

const SearchItems = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()))
      setFilterData(data);
    }
    filteredData();
  }, [term])



  return (
    <Products cart={cart} setCart={setCart} items={filterData}></Products>
  )
}

export default SearchItems