import { Link } from "react-router-dom";
import ProductType from "../../types/ProductType"

export default function ProductCard({product, detailed}){
    return ( 
        <div className="product">
            <h2>{product.name}</h2>
            <img src={product.img} />
            <p>Prix: {product.price}€</p>
            {
                detailed == true && 
                <>
                    <p>{product.description}</p>
                    <p>Plateforme: {product.platform}</p>
                    <button>Ajouter au panier</button>
                </>
            }

            {
                detailed == false && <Link to={`/product/${product.id}`}>Voir le détail</Link>
            }
           
        </div>
    )
}

ProductCard.propTypes = ProductType;