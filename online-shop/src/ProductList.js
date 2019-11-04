import React from 'react'
import Product from './components/product/Product'
import './ProductList.css'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        this.updateCount = this.updateCount.bind(this)
    }

    updateCount() {
        this.setState(() => this.state.count++);
    }

    render() {
        const { product } = this.props
        return (
            <div className="container">
                <Product product={product} />
                <button className="btn btn-success" onClick={this.updateCount}>Clicked {this.state.count} times!</button>
            </div>
        )
    }
}

export default ProductList