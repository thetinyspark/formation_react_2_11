import { useEffect, useMemo, useState } from "react"
import GameContext from "./GameContext";

export default function GameProvider({children}){

    // ici on crée l'état catalog et son dispatcher
    const [catalog, setCatalog] = useState([]);

    // ici par exemple, on pourrait créer un panier et son dispatcher
    // et les partager via le useMemo

    const store = useMemo(
        ()=>{
            // ici on partage les données qui seront accessibles à travers l'application
            return {
                catalog: catalog, 
                setCatalog: setCatalog
            };
        }, 
        [catalog]
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