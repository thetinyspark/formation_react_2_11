import { useParams } from "react-router-dom";
import ProductCard from "../comp/ProductCard";
import useReduxStore from "../hooks/useReduxStore";

export default function ProductDetailedPage(){
    const {catalog} = useReduxStore();
    const {id} = useParams();
    const product = catalog.find( (product) => product.id == parseInt(id)) || null;

    return product && <ProductCard product={product} detailed={true} />
}