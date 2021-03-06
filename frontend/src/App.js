import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import { signout } from './action/userActions';
import CartScreen from './screens/cartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SS from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
function App() {
  
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state)=> state.userSignin);
  const {userInfo} = userSignin; 
 const dispatch=useDispatch();
  const signoutHandler =() =>{
    dispatch(signout());
 }

  return (
   <BrowserRouter>  
   <div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" to="/">amazona</Link>
        </div>
        <div>
            <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>

            )}              
              </Link>
              {
                userInfo ? (

                    <div className="dropdown">



                  <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i>{''}</Link>
                  <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>Signout</Link>

                  </ul>
         </div>
         
                ) :
                (
                  <Link to="/signin">Sign In</Link>
             
                )
          }
</div>
    </header>
<main>{/* route always define in main */}
  <Route path="/cart/:id?" component={CartScreen}></Route>
  <Route path="/product/:id" component={ProductScreen}></Route>
<Route path="/signin" component={SS}></Route>
<Route path="/register" component={RegisterScreen}></Route>  
<Route path="/shipping" component={ShippingAddressScreen}></Route>
<Route path="/payment" component={PaymentMethodScreen}></Route>
<Route path="/placeorder" component={PlaceOrderScreen}></Route>
<Route path="/order/:id" component={OrderScreen} exact></Route>

<Route path="/" component={HomeScreen} exact></Route> {/* exact mean exactly home screen*/}
</main>
<footer className="row center">
  All right reserved
</footer>
</div>




</BrowserRouter>
  

  );
}

export default App;
