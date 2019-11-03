import React from 'react'
import Product from './components/product/Product'
import './ProductList.css'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { product } = this.props
        return (
            <div className="container">
                <Product product={product} />
            </div>
        )
    }
}

export default ProductList
