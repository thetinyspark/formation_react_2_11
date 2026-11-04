import { useMemo, useState } from 'react';
import CatalogFilter from '../comp/CatalogFilter';
import ProductCard from '../comp/ProductCard';
import CatalogUtils from '../../utils/CatalogUtils';
import useGameStore from '../hooks/useGameStore';

export default function Catalog(){


    const {catalog} = useGameStore();
    const [currentPlatform, setCurrentPlatform] = useState(CatalogUtils.DEFAULT_PLATFORM);
    const [currentPriceMin, setCurrentPriceMin] = useState(0);
    const [currentPriceMax, setCurrentPriceMax] = useState(100);
    const [currentName, setCurrentName] = useState("");
    // const [catalog,setCatalog] = useState([]);

    // à chaque fois que l'un des états change
    // la fonction passée en paramètre de useMemo est relancée
    const filteredProducts = useMemo( 
        ()=>{
            return CatalogUtils.filterProducts(
                catalog, 
                currentName, 
                currentPlatform, 
                currentPriceMin,
                currentPriceMax,
            );
        }, 
        [currentPlatform, currentName, currentPriceMax, currentPriceMin, catalog]
    ); 



    return (
        <>
        <CatalogFilter  products={catalog} 
                        onChangePlatform={setCurrentPlatform} 
                        onChangePriceMax={setCurrentPriceMax}
                        onChangePriceMin={setCurrentPriceMin}
                        onChangeName={setCurrentName}
                        />

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

