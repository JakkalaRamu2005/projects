import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setError(null);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Failed to load product.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">{error}</p>;
  if (!product) return null;

  return (
    <div className="details-container">
      <div className="details-card">
        <img className="details-image" src={product.image} alt={product.title} />
        <div className="details-info">
          <h2>{product.title}</h2>
          <p className="details-price">${product.price}</p>
          <p className="details-desc">{product.description}</p>
          <button
            className="btn primary"
            onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
