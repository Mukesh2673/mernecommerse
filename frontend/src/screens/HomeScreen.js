import React, { useEffect} from 'react'; 
/* use effect is an hook that happen when component did mount to webpage after
 rendering component
this function will run */
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {useDispatch,useSelector } from 'react-redux';
import { listProducts } from '../action/productActions';


export default function HomeScreen(){
  const dispatch = useDispatch();
  const productList=useSelector((state)=>state.productList);
  const { loading ,error,products}= productList;
  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch]);
  
 /*  use effect accept two parameter first is function and another is array this array accept
  list of dependencies
  after rendering the component this function will run only once this function will send an 
  ajax request to the backend and fetch products from there */
  
  
  
  return (
        <div>
{ loading ? (<LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ):(
<div className="row center">
    {
      products.map((product) =>(
  <Product key={product._id} product={product}></Product>
    ))
    }
  </div>

  )}

    
  </div>  
  );
}