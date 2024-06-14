import PropTypes from "prop-types";
import "../App.css";

const Dropdown = ({ options, onChange }) => {
  // Gérer le changement de sélection dans la liste déroulante
  const handleChange = (event) => {
    const selectedIndex = event.target.value;
    onChange(selectedIndex);
  };

  return (
    <select onChange={handleChange} className="dropdown">
      <option value="">Sélectionnez un produit</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
