
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// eslint-disable-next-line import/no-anonymous-default-export
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <ProductForm/>
            <hr/>
            <h2>All Products:</h2>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default Main;


