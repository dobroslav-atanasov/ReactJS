import React, { Fragment } from 'react'
import Product from './components/product/Product'
import Header from './components/header/Header'
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
        const { products } = this.props
        const prods = products.map((product) => <Product key={product.id} product={product}/>)
        return (
            <Fragment>
                <Header></Header>
                <div className="container">
                    {prods}
                    {/* <Product products={products} /> */}
                    {/* <button className="btn btn-info" onClick={this.updateCount}>Clicked {this.state.count} times!</button> */}
                </div>
            </Fragment>
        )
    }
}

export default ProductList