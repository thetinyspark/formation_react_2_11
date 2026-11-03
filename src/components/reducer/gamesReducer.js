import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    games: []
};
// on crée un objet de type slice qui associe un tat initial à un reducer. 
// le reducer possède plusieurs actions
const slice = createSlice(
    {
        name: "games",
        initialState: initialState, 
        reducers: {
            setGames(state, action){
                // l'action modifie une copie du state en cours
                // cette copie est envoyée par redux. 
                // une fois cette copie modifiée, redux se charge 
                // de faire le différentiel et de publier cela à travers le store
                // et donc de mettre à jour les états du stores correspondants
                // automatiquement
                state.games = action.payload;
            }
        }
    }
); 

// on peut exporter les actions du reducer individuellements
export const {addGame, setGames, removeGame} = slice.actions;

// et enfin on exporte le reducer par default afin de le déclarer 
// au sein du store
export default slice.reducer;