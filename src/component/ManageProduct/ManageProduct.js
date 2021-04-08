import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const[products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://cherry-pudding-96348.herokuapp.com/products/')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {
                products.map(product => (
                    <div>
                        <h5>Name:{product?.name}</h5>
                        <button>Delete</button>
                    </div>

                ))
            }
        </div>
    );
};

export default ManageProduct;