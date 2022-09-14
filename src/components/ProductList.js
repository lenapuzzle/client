import React from 'react'
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <div>
                    <p>
                    <Link to={`/products/${i}`}>{product.title}</Link>
                    </p>
                </div>
            )}
        </div>
    )
}
    
export default ProductList;