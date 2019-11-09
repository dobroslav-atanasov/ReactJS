import React from 'react'
import styles from './Product.module.css'

const Product = (props) => {
    return (
        <div className={styles.productTile}>
            <img className={styles.productImage} src={props.product.image} alt={props.product.title} />
            <div>
                <span className={styles.productBrand}>{props.product.brand}</span>
                <span className={styles.productTitle}>{props.product.title}</span>
                <p className={styles.productPrice}>
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