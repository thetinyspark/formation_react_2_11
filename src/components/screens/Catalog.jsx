import { useEffect, useMemo, useState } from 'react';
import CatalogFilter from '../comp/CatalogFilter';
import ProductCard from '../comp/ProductCard';
import CatalogUtils from '../../utils/CatalogUtils';

export default function Catalog(){
    const [currentPlatform, setCurrentPlatform] = useState(CatalogUtils.DEFAULT_PLATFORM);
    const [currentPriceMin, setCurrentPriceMin] = useState(0);
    const [currentPriceMax, setCurrentPriceMax] = useState(100);
    const [currentName, setCurrentName] = useState("");
    const [catalog,setCatalog] = useState([]);

    // à chaque fois que l'un des états change
    // la fonction passée en paramètre de useMemo est relancée
    const filteredProducts = useMemo( 
        ()=>{
            
            let filtered = catalog.filter(
                (product)=>{
                    if( currentPlatform == CatalogUtils.DEFAULT_PLATFORM )
                        return true;

                    return product.platform.toLowerCase().includes(currentPlatform.toLowerCase());
                }
            );

            filtered = filtered.filter(
                (product)=>{
                    return product.name.toLowerCase().includes(currentName.toLowerCase());
                }
            ); 

            filtered = filtered.filter(
                (product)=>{
                    return product.price <= currentPriceMax;
                }
            ); 

            filtered = filtered.filter(
                (product)=>{
                    return product.price >= currentPriceMin;
                }
            ); 

            return filtered;
        }, 
        [currentPlatform, currentName, currentPriceMax, currentPriceMin, catalog]
    ); 

    const numProduits = useMemo( 
        ()=>{
            return filteredProducts.length;
        }, 
        [filteredProducts]
    );

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


    return (
        <>
        <CatalogFilter  products={catalog} 
                        onChangePlatform={setCurrentPlatform} 
                        onChangePriceMax={setCurrentPriceMax}
                        onChangePriceMin={setCurrentPriceMin}
                        onChangeName={setCurrentName}
                        />

        <p>Il y a {numProduits} produit(s) trouvé(s) d'après votre recherche</p>
        {
            filteredProducts.map(
                (product)=>{
                    return ( 
                        <ProductCard product={product} key={product.id} detailed={false} />
                    )
                }
            )
        }
        </>
    );
}

