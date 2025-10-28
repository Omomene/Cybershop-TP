import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: "2px solid #39FF14",
      borderRadius: "12px",
      padding: "15px",
      width: "220px",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      textAlign: "center",
      boxShadow: "0 0 15px #39FF14, 0 0 25px #ff00ff",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "pointer"
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 20px #39FF14, 0 0 35px #ff00ff";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 15px #39FF14, 0 0 25px #ff00ff";
      }}
    >
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3 style={{ margin: "10px 0", color: "#39FF14" }}>{product.name}</h3>
      <p style={{ color: "#ff00ff" }}>{product.category}</p>
      <p style={{ color: "#fff200" }}>${product.price}</p>
      <p style={{ fontSize: "0.9rem", color: "#fff" }}>{product.description}</p>
    </div>
  );
};

export default ProductCard;
