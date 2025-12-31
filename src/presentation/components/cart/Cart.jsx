
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
import { isLoggedIn } from "../../../utils/authUtils";
import React, { useEffect, useState, useRef } from "react";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const toastShown = useRef(false);

   useEffect(() => {
    if (!isLoggedIn() && !toastShown.current) {
    toastShown.current = true;

    toast.warning(
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <strong>Please login to view your cart</strong>
          <button
            style={{
              background: "#2874f0",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              width: "fit-content",
            }}
            onClick={() => navigate("/login")}
          >
            Login Now
          </button>
        </div>,
        {
          autoClose: false,
          closeOnClick: false,
        }
      );
    }
  }, [navigate]);
  useEffect(() => {
        if (isLoggedIn()) {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
        }
  }, []);
  if (!isLoggedIn()) {
    return null;
  }
  const handleRemove = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="cart-wrapper">

      <div className="cart-left">
        <h2 className="cart-heading">My Cart ({cartItems.length})</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-details">
                <h4>{item.title}</h4>
                <p className="author">By {item.author}</p>
                <p className="price">₹{item.price}</p>

                <div className="cart-actions">
                  <button className="secondary">Save for Later</button>
                  <button className="secondary">Move to Wishlist</button>
                </div>
              </div>

              <button className="remove" onClick={() => handleRemove(item.id)}>
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-right">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Items</span>
          <span>{cartItems.length}</span>
        </div>

        <div className="summary-row">
          <span>Total Amount</span>
          <span className="bold">₹{total}</span>
        </div>

        <button className="checkout-btn">
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default Cart;
