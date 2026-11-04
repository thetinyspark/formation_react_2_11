import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const slice = createSlice(
    {
        name: "cart",
        initialState: initialState, 
        reducers: {
             setCart(state, action){
                state.cart = action.payload;
            },
            addToCart(state, action){
                state.cart = [...state.cart, {...action.payload}];
            } ,
            removeFromCart(state, action){
                state.cart = state.cart.filter( (p)=>p!==action.payload);
            }
        }
    }
); 

export const {setCart, addToCart, removeFromCart} = slice.actions;
export default slice.reducer;