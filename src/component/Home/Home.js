import React, { useEffect,useState } from 'react';
import Product from '../Product/Product';

const Home = () => {

    const [products,setProducts]= useState([])

    useEffect(()=>{
        fetch('https://cherry-pudding-96348.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])
    
        
    return (
        <div >
            <h1>Gadget Shop</h1>
           {
               products.map(product => <Product product={product}></Product>)
               
              
           }
            </div>
    );
};

export default Home;