import PropTypes from "prop-types"

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

ProductCard.propTypes = {
  product: PropTypes.shape(
    {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        platform: PropTypes.string.isRequired
    }
  ).isRequired 
}