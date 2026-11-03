import { useEffect, useMemo, useState } from "react"
import GameContext from "./GameContext";

export default function GameProvider({children}){

    // ici on crée l'état catalog et son dispatcher
    const [catalog, setCatalog] = useState([]);
    const [cart, setCart] = useState([]);


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

    const store = useMemo(
        ()=>{
            // ici on partage les données qui seront accessibles à travers l'application
            return {
                catalog: catalog, 
                setCatalog: setCatalog, 
                cart: cart, 
                addToCart: (product)=>{
                    setCart( [...cart, {...product}] );
                }, 
                removeFromCart: (product)=>{
                    // première façon de faire
                    // const pos = cart.indexOf(product);
                    // cart.splice(pos, 1);

                    // deuxième façon de faire
                    const toRemoveProduct = cart.find( (p)=>p.id == product.id) || null;
                    const newCart = cart.filter( (p)=>p!==toRemoveProduct);

                    setCart(newCart);
                }, 
                getTotalPriceHT: getTotalPriceHT,
                getTotalPriceTTC: getTotalPriceTTC
            };
        }, 
        [catalog, cart]
    )

    useEffect(
        ()=>{
             const getDataFormUrl = async (url) =>{
                try{
                    const response = await window.fetch(url);
                    const data = await response.json();
                    return data;
                }
                catch(error){
                    console.error(error);
                }
            }

            const refresh = async()=>{
                try{
                    const catalogData = await getDataFormUrl("/assets/catalog.json");
                    setCatalog(catalogData);
                }
                catch(error){ 
                    console.error(error) 
                }
            }

            refresh();
        }, 
        []
    )

    // children est la props standard de react qui contient l'ensemble des 
    // balises enfants ajoutées à la balise GameProvider.
    return <GameContext.Provider value={store}>{children}</GameContext.Provider>
}