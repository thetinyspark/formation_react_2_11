import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setGames} from "../reducer/gamesReducer";

export default function useReduxStore(){
    // le dispatcher va prendre une action du reducer en paramètre
    // et une fois cette dernière effectuée, il va notifier le store
    // du changement d'état et répercuter ainsi le changement partout
    // où il en a besoin

    const dispatch = useDispatch();
    const {games} = useSelector(
        (state)=>state.games
    );

    useEffect(
        ()=>{
            async function getCatalog(){
                const catalogData = await ((await window.fetch("/assets/catalog.json")).json());
                dispatch(setGames(catalogData));
            }

            getCatalog();
        }, 
        []
    );

    return {
        games, 
        setGames: (products) => dispatch( setGames(products))
    }
}