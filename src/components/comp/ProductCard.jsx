import ProductType from "../../types/ProductType"

export default function ProductCard({product}){
    return ( 
        <div className="product">
            <h2>{product.name}</h2>
            <img src={product.img} />
            <p>{product.description}</p>
            <p>Prix: {product.price}€</p>
            <p>Plateforme: {product.platform}</p>
        </div>
    )
}

ProductCard.propTypes = ProductType;