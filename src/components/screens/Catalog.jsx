import { useMemo, useState } from 'react';
import CatalogType from '../../types/CatalogType';
import CatalogFilter from '../comp/CatalogFilter';
import ProductCard from '../comp/ProductCard';
import CatalogUtils from '../../utils/CatalogUtils';

export default function Catalog({products}){

    const catalog = products;
    const [currentPlatform, setCurrentPlatform] = useState(CatalogUtils.DEFAULT_PLATFORM);
    const [currentPriceMin, setCurrentPriceMin] = useState(0);
    const [currentPriceMax, setCurrentPriceMax] = useState(100);
    const [currentName, setCurrentName] = useState("");

    
    // à chaque fois que l'un des états change
    // la fonction passée en paramètre de useMemo est relancée
    const filteredProducts = useMemo( 
        ()=>{
            
            let filtered = products.filter(
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
        [currentPlatform, currentName, currentPriceMax, currentPriceMin]
    ); 

    const numProduits = useMemo( 
        ()=>{
            return filteredProducts.length;
        }, 
        [filteredProducts]
    );


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
                        <ProductCard product={product} key={product.id} />
                    )
                }
            )
        }
        </>
    );
}

Catalog.propTypes = {
    products: CatalogType
};

