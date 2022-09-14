import React from 'react'
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <div key={i}>
                    <p>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </p>
                </div>
            )}
        </div>
    )
}
    
export default ProductList;