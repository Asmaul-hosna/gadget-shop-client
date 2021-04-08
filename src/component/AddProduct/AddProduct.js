import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const[imageURL,setImageURL]=useState(null);


    const onSubmit = data => {
       const productData = {
           name:data.name,
           imageURL: imageURL
       };
       const url= `http://localhost:5500/addProduct` 
       
      
       fetch(url,{
           method: 'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(productData)
        })
        .then(res => console.log('server side response'))

    };

    const handleImageUpload = product => {
        console.log(product.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','d1637e005fcc3c2c7a904fc545a66262');
        imageData.append('image',product.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
}

   

    return (
        <div>
        <h1>Add your product</h1>    
    <form onSubmit={handleSubmit(onSubmit)}>

   <input name="name" defaultValue="New product" ref={register} />
   <br/>
  <input name="exampleRequired" type="file" onChange={handleImageUpload} />
  <br/>
 <input type="submit" />
</form>
</div>
    );
};

export default AddProduct;