import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="p-10 text-center">
      <img src={product.image} alt={product.name} className="mx-auto w-60 h-60 object-cover rounded-xl" />
      <h2 className="text-yellow-300 text-3xl mt-4">{product.name}</h2>
      <p className="text-green-400 mt-2 text-xl">{product.price} €</p>
      <p className="text-purple-300 mt-4">{product.description}</p>
    </div>
  );
}
