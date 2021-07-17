const{
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
}=require('../constants/productConstants');
export const productListReducer=(state={loading: true, products:[] },action)=>{
/* 
to prevent any further error we use within default value we set loading:true */


  /*  for the state we need to set the state as default  and set product to empty array if we don't set the default
   state then we get the error because when we want to show product in homescreen it  should be an empty array */  
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading:true};
        case PRODUCT_LIST_SUCCESS:
            return{ loading:false,products: action.payload};
        case PRODUCT_LIST_FAIL:
            return { loading:false,error: action.payload};
        default:
            return state;
            }
        };

export const productDetailsReducer=(state={product:{},loading:true}, action)=>{
switch (action.type){
case PRODUCT_DETAILS_REQUEST:
    return { loading: true};
case PRODUCT_DETAILS_SUCCESS:
    return { loading:false,product: action.payload};
case PRODUCT_DETAILS_FAIL:
    return { loading:false, error:  action.payload};
default:
    return state;
}
};
