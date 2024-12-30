import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data.jsx';
import Products from './Products.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProd, setRelatedProd] = useState([]);

  const addtoCart = (id, price, title, desc, imgSrc) => {
    const obj = {
      id, price, title, desc, imgSrc
    }
    setCart([...cart, obj])
    toast.success('Item added to Cart', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }
  useEffect(() => {
    const filter = items.filter((product) => product.id == id);
    // console.log(filter)
    setProduct(filter[0]);
    const relProd = items.filter((prod) => prod.category === product.category);
    setRelatedProd(relProd)
    // console.log(relProd)
  }, [id, product.category])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <div className="container cbody">
        <div className="img">
          <img src={product.imgSrc} alt=""></img>
        </div>
        <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">
            {product.price} ₹
          </button>
          <button
            onClick={() => addtoCart(product.id, product.price, product.title, product.description, product.imgSrc)}
            className="btn btn-warning"
          >Add To Cart</button>
        </div>
      </div>
      <h1 className='text-center'> Related Products</h1>
      <Products cart={cart} setCart={setCart} items={relatedProd} />
    </>
  )
}

export default ProductDetails
