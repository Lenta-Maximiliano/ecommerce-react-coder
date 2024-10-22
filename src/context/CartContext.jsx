import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((prod) => prod.id === id);

  const addItem = (item) => {
    setCart((prevCart) => {
      const isItemInCart = isInCart(item.id);
      return isItemInCart
        ? prevCart.map((prod) =>
            prod.id === item.id
              ? { ...prod, quantity: prod.quantity + item.quantity }
              : prod
          )
        : [...prevCart, { ...item, quantity: item.quantity }];
    });
  };

  const removeItem = (id) => setCart((prevCart) => prevCart.filter((prod) => prod.id !== id));

  const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}