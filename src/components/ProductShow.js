import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
    
const ProductShow = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);
    console.log(product);
    return (
        <div>
            <div>
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <Link to="/products">
                <button>Go Back to Products</button>
            </Link>
        </div>
    )
}
    
export default ProductShow;