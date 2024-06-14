// App.js
import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [products, setProducts] = useState([]); // État pour stocker les produits
  const [selectedProduct, setSelectedProduct] = useState(null); // État pour le produit sélectionné

  // Récup' les produits du localStorage lors du montage du composant
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  // Maj le localStorage chaque fois que la liste des produits change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // + un nouveau produit à la liste
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Sélection d'un produit dans la liste déroulante
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app-container">
      <h1>Liste de Produits</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} onProductSelect={handleProductSelect} />
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

export default App;
