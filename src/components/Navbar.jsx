import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './data.jsx'
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ setData, cart }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")


    // filtering in navbar
    const filterByCategory = (category) => {
        const element = items.filter((product) => product.category === category)
        // console.log(element)
        setData(element);
    }

    const filterByPrice = (price) => {
        const element = items.filter((product) => product.price <= price)
        // console.log(element)
        setData(element);
    }

    const filterByPrice2 = (price) => {
        const element = items.filter((product) => product.price > price)
        // console.log(element)
        setData(element);
    }

    // searching 
    const handleSubmit = (e) => {
        e.preventDefault();
        // to prevent reloading of page upon searching
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
    }


    return (
        <>
            <header className='sticky-top'>
                <div className="navbar">
                    <Link to={'/'} className='title'>
                        E-Com
                    </Link>
                    <form
                        onSubmit={handleSubmit}
                        className="search-bar">
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)
                            }
                            type='text'
                            placeholder='Search here' />

                    </form>
                    <Link to='/cart' className="cart">
                        <button type="button" className="btn btn-primary position-relative">
                            <FaCartShopping style={{ fontSize: '1.5rem' }} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button></Link>
                    <Link to='/account' className="account">Account</Link>
                </div>
                {
                    location.pathname == '/' &&
                    (
                        <div className="nav-bar-filter">
                            <div className="items"
                                onClick={() => setData(items)}>All</div>
                            <div className="items"
                                onClick={() => filterByCategory('mobiles')}>Mobile</div>
                            <div className="items"
                                onClick={() => filterByCategory('tablets')}>Tablet</div>
                            <div className="items"
                                onClick={() => filterByCategory('laptops')}>Laptop</div>
                            <div className="items"
                                onClick={() => filterByPrice('20000')}>Upto 20K</div>
                            <div className="items"
                                onClick={() => filterByPrice('30000')}>Upto 30K</div>
                            <div className="items"
                                onClick={() => filterByPrice('40000')}>Upto 50K</div>
                            <div className="items"
                                onClick={() => filterByPrice2('50000')}>Above 50K</div>
                        </div>
                    )
                }

            </header>
        </>
    )
}

export default Navbar
