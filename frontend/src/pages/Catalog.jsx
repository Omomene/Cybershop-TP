import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{
      minHeight: "80vh",
      padding: "20px",
      background: "linear-gradient(135deg, #000000, #1a001a)",
      color: "#39FF14"
    }}>
      <h1 style={{
        fontSize: "3rem",
        marginBottom: "20px",
        textShadow: "0 0 10px #39FF14, 0 0 20px #ff00ff"
      }}>Catalog</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      }}>
        {products.length === 0 ? (
          <p style={{ color: "#fff200", fontSize: "1.2rem", textShadow: "0 0 5px #fff200" }}>No products yet!</p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;
