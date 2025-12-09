"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import reducer from "../reducer/cart_reducer";
import { productData } from "@/components/SingleCard";

// ✅ Define TypeScript interfaces
interface CartItem {
  id: string;
  price: number;
  name: string;
  item: productData;
}

interface CartState {
  cart: CartItem[];
  total_item: string;
  total_amount: string;
}

interface CartContextType extends CartState {
  addToCart: (data: CartItem) => void;
  removeFromCart: (id: string) => void;
}

// ✅ Correctly typed context
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// ✅ CartProvider component
export default function CartProvider({ children }: { children: ReactNode }) {
  const initialState: CartState = {
    cart: [],
    total_item: "",
    total_amount: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = ({ id, price, name, item }: CartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, price, name, item } });
    console.log("DISPATCHING to cart with:", { id, price, name, item });
  };
  const removeFromCart = (id: string) => {
    console.log("Removing from cart:", id);
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// ✅ Custom hook with safety check
const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export { useCartContext };
