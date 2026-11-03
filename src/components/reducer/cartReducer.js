import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

function setCart(state, action){
    state.cart = action.payload;
}
function addToCart (state, action){
    console.log(state, action);
    state.cart = [...state.cart, action.payload];
} 
function removeFromCart(state, action){
    state.cart = state.cart.filter( (p)=>p!==action.payload);
}

const slice = createSlice(
    {
        name: "cart",
        initialState: initialState, 
        reducers: {setCart, addToCart, removeFromCart}
    }
); 

export {setCart, addToCart, removeFromCart};
export default slice.reducer;