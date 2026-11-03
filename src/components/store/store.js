import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../reducer/gamesReducer";

export const store = configureStore(
    {
        reducer: {
            games: gamesReducer
        }
    }
)