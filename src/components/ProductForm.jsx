import { useState, useRef } from "react";
import "../App.css";
import PropTypes from "prop-types";

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState(""); // État pour le nom du produit
  const [description, setDescription] = useState(""); // État pour la description du produit
  const [price, setPrice] = useState(""); // État pour le prix du produit
  const nameRef = useRef(null); // Réf pour le champ de saisie du nom

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, description, price });
    setName("");
    setDescription("");
    setPrice("");
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div>
        <label>Nom : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
        />
      </div>
      <div>
        <label>Description : </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Prix : </label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Ajouter le produit</button>
    </form>
  );
};

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default ProductForm;
