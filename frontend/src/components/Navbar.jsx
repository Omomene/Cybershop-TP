import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#0d0d0d",
      boxShadow: "0 0 15px #39FF14, 0 0 25px #ff00ff",
      fontFamily: "monospace",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{
        marginRight: "30px",
        color: "#39FF14",
        textDecoration: "none",
        fontSize: "1.5rem",
        textShadow: "0 0 5px #39FF14, 0 0 10px #ff00ff",
        transition: "0.2s"
      }}
      onMouseEnter={e => e.currentTarget.style.color = "#fff200"}
      onMouseLeave={e => e.currentTarget.style.color = "#39FF14"}
      >
        Home
      </Link>

      <Link to="/catalog" style={{
        color: "#39FF14",
        textDecoration: "none",
        fontSize: "1.5rem",
        textShadow: "0 0 5px #39FF14, 0 0 10px #ff00ff",
        transition: "0.2s"
      }}
      onMouseEnter={e => e.currentTarget.style.color = "#fff200"}
      onMouseLeave={e => e.currentTarget.style.color = "#39FF14"}
      >
        Catalog
      </Link>
    </nav>
  );
};

export default Navbar;
