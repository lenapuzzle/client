import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import ProductForm from '../components/ProductForm';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    // // this logic is now in PersonForm file
    // const [ message, setMessage ] = useState("Loading...")
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api")
    //         .then(res=>setMessage(res.data.message))       
    // }, []);
    
    return (
        <ProductForm/>
    )
}


