import { useParams } from "react-router-dom";
import ProductCard from "../comp/ProductCard";
import useGameStore from "../hooks/useGameStore";

export default function ProductDetailedPage(){
    // const context = useGameStore();
    // const catalog = context.catalog;
    const {catalog} = useGameStore();
    const {id} = useParams();
    const product = catalog.find( (product) => product.id == parseInt(id)) || null;

    return product && <ProductCard product={product} detailed={true} />
}