import { Link } from "react-router-dom";
import ProductType from "../../types/ProductType"
import useGameStore from "../hooks/useGameStore";

export default function ProductCard({product, detailed}){

    const {addToCart} = useGameStore();

    return ( 
        <div className="product" data-testid={`product_${product.id}`}>
            <h2>{product.name}</h2>
            <img src={product.img} />
            <p>Prix: {product.price}€</p>
            {
                detailed == true && 
                <>
                    <p>{product.description}</p>
                    <p>Plateforme: {product.platform}</p>
                    <button onClick={
                        ()=>{
                            addToCart(product);
                        }
                    }>Ajouter au panier</button>
                </>
            }

            {
                detailed == false && <Link to={`/product/${product.id}`}>Voir le détail</Link>
            }
           
        </div>
    )
}

ProductCard.propTypes = ProductType;