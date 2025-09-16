import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setError(null);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Something went wrong while fetching products.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">{error}</p>;

  return (
    <div className="home-container">
      <h1 className="home-title">Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img className="product-image" src={product.image} alt={product.title} />
            <h3 className="product-title">
              {product.title.length > 45 ? product.title.slice(0,45) + '...' : product.title}
            </h3>
            <p className="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
