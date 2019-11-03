import React from 'react'
import Product from './components/product/Product'
import './ProductList.css'

function ProductList({ product }) {
    return (
        <div className="container">
            <Product product={product}/>
        </div>
    )
}

export default ProductList