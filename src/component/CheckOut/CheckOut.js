import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css';

const CheckOut = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const {_id} = useParams();
    const[products,setProducts] = useState([]);
   

    const handleOrder =()=> {
        const newOrder = {...loggedInUser,...products}
        fetch('https://cherry-pudding-96348.herokuapp.com/addOrder',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newOrder)
        }).then(res => res.json())
          .then(data => {
              if (data){
                  alert('your order placed successfully');
              }
          })
        
    }

    useEffect(()=>{
        fetch('https://cherry-pudding-96348.herokuapp.com/products/')
        .then(res =>res.json())
        .then(data =>setProducts(data));
    },[_id])
    const productData =products.find(pd=>pd._id == _id)
   
    
   
        

    
   
    return (
        <div>
        <table style={{width:'100%'}}>
            <tr>
                <th>name</th>
                <th>quantity</th>
                <th>total</th>
            </tr>
            <tr>
  
            <td>{productData?.name}</td>
            <td>{productData?.quantity}</td>
            <td>{productData?.total}</td>
            </tr>
        </table> <br/> 
       <Link to="/Orders" ><button onClick={() =>handleOrder(products._id)}>orders</button></Link>
        </div>

    );
};

export default CheckOut;