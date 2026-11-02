import CatalogType from '../../types/CatalogType';
import ProductCard from '../comp/ProductCard';

export default function Catalog({products}){
    return products.map(
        (product)=>{
            return ( 
            <ProductCard product={product} key={product.id} />
            )
        }
    );
}

Catalog.propTypes = {
    products: CatalogType
};

