import React from 'react'
import ProductCard from '../components/ProductCard.jsx'

const Home = () => {
  return (
    <>
    <div className="home">
        <h1 className='title text-red text-center'>Welcome to redux toolkit</h1>
        <div className="container">
          <div className="row">
            <h4 className='text-gray'>All Products</h4>
              <ProductCard />
          </div>
        </div>
    </div>
    </>
  )
}

export default Home