import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Tour } from "@/types/tour";

type CartContextType = {
  cart: Tour[];
  addToCart: (tour: Tour) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  isInCart: (id: number) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Tour[]>([]);

  // Загрузка данных корзины из localStorage при монтировании
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Ошибка при чтении корзины из localStorage:", error);
        localStorage.removeItem("cart");
      }
    }
  }, []);

  // Сохранение корзины в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (tour: Tour) => {
    // Проверка, есть ли уже такой тур в корзине
    if (!cart.some(item => item.id === tour.id)) {
      setCart(prevCart => [...prevCart, tour]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(tour => tour.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id: number) => {
    return cart.some(tour => tour.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
