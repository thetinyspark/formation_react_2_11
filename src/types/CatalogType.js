import PropTypes from "prop-types";
import ProductType from "./ProductType";

const CatalogType = PropTypes.arrayOf(ProductType).isRequired;

export default CatalogType;