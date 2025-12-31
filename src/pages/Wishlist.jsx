import React, { useState, useEffect } from "react";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (wishlist.length === 0) return <p style={{ padding: "20px" }}>Your wishlist is empty!</p>;

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map((book) => (
          <div className="wishlist-card" key={book.id}>
            <img src={book.image} alt={book.title} className="wishlist-image" />
            <div className="wishlist-info">
              <h3>{book.title}</h3>
              {book.author && <p><strong>Author:</strong> {book.author}</p>}
              <p><strong>Price:</strong> ₹{book.price}</p>
              <button className="wishlist-remove-btn" onClick={() => removeItem(book.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
