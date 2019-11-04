import React from 'react'

const Product = (props) => {
    return (
        <div className="product-tile">
            <img className="product-image" src={props.product.image} alt={props.product.title} />
            <div>
                <span className="product-brand">{props.product.brand}</span>
                <span className="product-title">{props.product.title}</span>
                <p className="product-price">
                    Price:
                    <span>
                        {props.product.price}$
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Product