import { useEffect, useMemo, useState } from "react"
import GameContext from "./GameContext";

export default function GameProvider({children}){

    const [catalog, setCatalog] = useState([]);

    const store = useMemo(
        ()=>{
            return {
                catalog: catalog
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