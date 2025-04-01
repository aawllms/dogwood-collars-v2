import React, { useState, useEffect } from "react";
import "../css/CartProducts.css";

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  const handleQuantityChange = (itemId: string, newQuantity: number): void => {
    setCartItems((prevItems: CartItem[]) =>
      prevItems.map((item: CartItem) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string): void => {
    setCartItems((prevItems: CartItem[]) =>
      prevItems.filter((item: CartItem) => item.id !== itemId)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>Quantity: {item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
