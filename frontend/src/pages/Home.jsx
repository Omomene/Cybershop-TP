import React from "react";

const Home = () => {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#39FF14",
      background: "linear-gradient(135deg, #000000, #1a001a)"
    }}>
      <h1 style={{
        fontSize: "4rem",
        textShadow: "0 0 10px #39FF14, 0 0 20px #ff00ff"
      }}>Welcome to CyberShop</h1>
      <p style={{
        fontSize: "1.5rem",
        marginTop: "20px",
        color: "#fff200",
        textShadow: "0 0 5px #fff200"
      }}>
        Explore futuristic products in neon style.
      </p>
    </div>
  );
};

export default Home;
