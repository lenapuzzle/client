import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId) 
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {props.products.map( (product, i) => {
                return <p key={i}>
                    <p>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </p>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete this Product
                        </button>
                    </p>
            })}
        </div>
    )
}
    
export default ProductList;