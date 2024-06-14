import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

const ProductList = ({ products, onProductSelect }) => {
  // Gérer le changement de sélection dans la liste déroulante
  const handleChange = (selectedIndex) => {
    onProductSelect(products[selectedIndex]);
  };

  return (
    <div className="dropdown-container">
      <Dropdown
        options={products.map((product, index) => ({
          value: index,
          label: product.name,
        }))}
        onChange={handleChange}
      />
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onProductSelect: PropTypes.func.isRequired,
};

export default ProductList;
