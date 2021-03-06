import React from 'react';
import Rating from './Rating';
import  { Link } from 'react-router-dom'
export default function Product(props){
    const { product }=props;
    return(
    <div key={product._id} className="card">
  
<Link to={`/product/${product._id}`}>
  {/* here we get the data dynamically so we are using objcet product and get it's data id  and here we use `sign so that a product can be call from its id in url*/}
  <img className="medium" src={product.image} alt={product.name}/>
</Link> 
<div className="card-body">
  
<Link to={`/product/${product._id}`}>
    <h2>{product.name}</h2>
  </Link>
  <Rating
   rating={product.rating} 
   numReviews={product.numReviews}
   >
</Rating>
    <div className="price">${product.price}</div>
    </div>
  </div>

);
}