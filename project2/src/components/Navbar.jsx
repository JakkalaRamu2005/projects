import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">E-Shop (Mini)</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </div>
      </div>
    </nav>
  );
}
