import { Link,  } from 'react-router-dom';

const Product = ({product}) => {
    console.log(product);
   

    const productStyle ={
        float:'left',
        width:'300px',
        border:'10px solid grey',
        padding:'20px',
        margin:'20px'
    }
  
   
    return (
        <div style={productStyle}>
           <img style={{width:'200px'}}src={product.imageURL} alt=""></img>
           <h3>{product.name}</h3>
           <Link to={`/checkOut/${product._id}`}><button>Buy now</button></Link>
           

           </div>
    );
};

export default Product;