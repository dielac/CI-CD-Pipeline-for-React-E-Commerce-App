
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"; 

import type { Product } from "../types/types"; 

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {}, 
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
