import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setGames} from "../reducer/gamesReducer";
import {setCart, addToCart, removeFromCart} from "../reducer/cartReducer";

export default function useReduxStore(){
    // le dispatcher va prendre une action du reducer en paramètre
    // et une fois cette dernière effectuée, il va notifier le store
    // du changement d'état et répercuter ainsi le changement partout
    // où il en a besoin

    const dispatch = useDispatch();
    const {games} = useSelector((state)=>state.games);
    const {cart} = useSelector((state)=>state.cart);

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

    function getTotalPriceHT(){
        const total = cart.reduce( 
            (prev, p)=>{
                return prev + p.price;
            }, 
            0
        )
        
        return total.toFixed(2);
    }

    function getTotalPriceTTC(){
        return (getTotalPriceHT() * 1.2).toFixed(2);
    }

    return {
        catalog: games, 
        cart, 
        setGames:       (products)  => dispatch( setGames(products)), 
        addToCart:      (product)   => dispatch( addToCart(product)),
        removeFromCart: (product)   => dispatch( removeFromCart(product)),
        setCart:        (product)   => dispatch( setCart(product)),
        getTotalPriceHT, 
        getTotalPriceTTC
    }
}