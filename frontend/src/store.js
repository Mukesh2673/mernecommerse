import {createStore,compose,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
/* redux thunk make a possible to send an ajax request in a redux action */
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers';
import { productDetailsReducer,productListReducer, } from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState ={
userSignin:{
      userInfo:localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')):null,
},
      cart: {
      cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')):[],
      shippingAddress: localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{},
      paymentMethod:'Paypal'

},
};/*  to create a redux store we need two things initital state another is the  reducer */
const reducer=combineReducers({/* 
      reducer is a function that accept two  state and action  and return new state paramter */
      productList: productListReducer,
      productDetails:productDetailsReducer,
      cart:cartReducer,
      userSignin:userSigninReducer,
      userRegister:userRegisterReducer,
      orderCreate:orderCreateReducer,
      orderDetails:orderDetailsReducer,
      orderPay:orderPayReducer
      
});
/* to show redux store in redux dev tool we can use we update compose function */
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(reducer, /* create store accept reducer and initialstate */
initialState,
composeEnhancer(applyMiddleware(thunk))
);
export default store;
