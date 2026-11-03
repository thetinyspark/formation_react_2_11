import { useContext } from "react";
import GameContext from "../contexts/GameContext";

export default function useGameStore(){
    
    const context = useContext(GameContext);
    if( context == null ){
        throw new Error("GameContext is null");
    }

    return context;
}