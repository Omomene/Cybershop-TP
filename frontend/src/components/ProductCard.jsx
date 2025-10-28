export default function ProductCard({ product }) {
  return (
    <div className="border border-purple-500 rounded-xl p-4 hover:bg-purple-900 transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-yellow-300 mt-2">{product.name}</h2>
      <p className="text-green-400">{product.price} €</p>
    </div>
  );
}
