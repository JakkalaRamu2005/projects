import React, { useContext } from 'react';
import  {CartContext}  from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  function handleCheckout() {
    if (cartItems.length === 0) {
      alert('Cart is empty.');
      return;
    }
    alert('Order placed successfully!');
    clearCart();
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li className="cart-item" key={item.id}>
                <img className="cart-image" src={item.image} alt={item.title} />
                <div className="cart-info">
                  <p className="cart-title">{item.title}</p>
                  <p className="cart-price">${item.price}</p>
                </div>
                <button className="btn danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <p className="total">Total: <strong>${total}</strong></p>
            <button className="btn primary" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
