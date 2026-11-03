import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../reducer/gamesReducer";
import cartReducer from "../reducer/cartReducer";

export const store = configureStore(
    {
        reducer: {
            games: gamesReducer, 
            cart: cartReducer
        }
    }
)