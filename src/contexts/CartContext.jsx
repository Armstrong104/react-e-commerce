import { createContext, useState, useEffect } from 'react';
import Proptypes from 'prop-types';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  });
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    if (
      confirm('Are you sure you want to remove this product from the cart?')
    ) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }
  };

  const decreaseQuantity = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      alert('Quantity cannot be less than 1 for this product');
    }
  };

  const checkOut = () => {
    if (cart.length > 1) {
      setCart([]);
      alert('Thank you for shopping with us!');
    } else {
      alert('Cart is Empty!!');
    }
  };

  const totalPrice = cart.reduce(
    (acc, curritem) => acc + curritem.price * curritem.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        totalPrice,
        checkOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
