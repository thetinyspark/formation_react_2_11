import { useState } from 'react';
import CatalogType from '../../types/CatalogType';
import CatalogFilter from '../comp/CatalogFilter';
import ProductCard from '../comp/ProductCard';
import CatalogUtils from '../../utils/CatalogUtils';

export default function Catalog({products}){
    // useState renvoie un état, sous forme d'un tableau avec deux éléments
    // le premier est la valeur que l'on peut consulter en lecture seule
    // le deuxième est un élément nommé "dispatcher", que l'on peut appeler
    // en lui donnant une nouvelle valeur pour le premier élement. 
    // en invoquant le dispatcher, la valeur de notre état est changée, 
    // et le moteur interne de React déclenche de nouveau, le rendu du composant. 
    // cette syntaxe fonctionne, mais elle est peu intuitive
    
    /*
    const state = useState(platforms[0]); 
    let filteredProducts = state[0];
    let setFilteredProducts = state[1];
    */

    // à la place on lui préférera le plus souvent la syntaxe destructurée 
    const [filteredProducts, setFilteredProducts] = useState(products);

    function onChangePlatform(platform){
        console.log("selected platform : " + platform);

        // on construit un tableau de produits en se basant sur la plateforme
        // insensible à la casse d'où la présence du toLowerCase()
        const filtered = products.filter(
            (product)=>{
                if( platform == CatalogUtils.DEFAULT_PLATFORM )
                    return true;

                return product.platform.toLowerCase().includes(platform.toLowerCase());
            }
        );

        // puis on rédéfinit l'état de notre filteredProducts que l'on utilise afin d'afficher les produits
        setFilteredProducts(filtered);
    }

    return (
        <>
        <CatalogFilter products={products} onChangePlatform={onChangePlatform} />
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

