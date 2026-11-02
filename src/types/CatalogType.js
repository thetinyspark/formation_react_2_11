import PropTypes from "prop-types";
import ProductType from "./ProductType";

const CatalogType = PropTypes.arrayOf(
    PropTypes.shape(
    {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        platform: PropTypes.string.isRequired
    })
).isRequired;

export default CatalogType;