import PropTypes from "prop-types";
import "../Product.css";

const ProductDetails = ({ product }) => {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Prix :</strong> {product.price}€
      </p>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductDetails;
