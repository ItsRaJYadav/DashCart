import React from 'react';

const CartPage = () => {
  // Sample cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
    { id: 3, name: 'Product 3', price: 20, quantity: 3 },
  ];

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-gray-500">Price: ${item.price}</p>
          <p className="text-gray-500">Quantity: {item.quantity}</p>
        </div>
        <div>
          <button className="text-red-500">Remove</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {renderCartItems()}
          <div className="flex items-center justify-between p-4">
            <h3 className="text-lg font-medium">Total Price:</h3>
            <p className="text-xl font-bold">${getTotalPrice()}</p>
          </div>
          <button className="block w-full p-3 text-center bg-blue-500 text-white rounded-sm hover:bg-blue-600">
            Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
