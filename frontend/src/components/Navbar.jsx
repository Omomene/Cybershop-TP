import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-purple-700 text-yellow-300">
      <h1 className="text-2xl font-bold">CyberShop</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </div>
    </nav>
  );
}
