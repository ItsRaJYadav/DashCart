'use client'
import React, { useState } from 'react';

const WishlistPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const renderWishlistItems = () => {
    return wishlistItems.map((item) => (
      <div key={item.id} className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-gray-500">Price: ${item.price}</p>
        </div>
        <div>
          <button className="text-blue-500 mr-2" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
          <button className="text-red-500" onClick={() => removeFromWishlist(item.id)}>
            Remove
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div>
          {renderWishlistItems()}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
      <h2 className="text-lg font-bold mt-8">Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.price}</p>
              </div>
              <div>
                <button className="text-red-500">Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
