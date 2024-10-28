import { createContext, useState } from "react";
import { processOrder } from '../services/orderService';

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
        : [...prevCart, item];
    });
  };

  const removeItem = (id) => setCart((prevCart) => prevCart.filter((prod) => prod.id !== id));

  const clear = () => setCart([]);

  const createNewOrder = async (order) => {
    return await processOrder(order, clear);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, clear, removeItem, createNewOrder }}>
      {children}
    </CartContext.Provider>
  );
}