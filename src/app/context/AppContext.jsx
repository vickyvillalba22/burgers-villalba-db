"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  // Cart
  const addToCart = () => {};
  const removeFromCart = () => {};
  const updateCartItemQuantity = () => {};
  const clearCart = () => {};

  // Favorites
  const addFavorite = () => {};
  const removeFavorite = () => {};

  // User
  const loginUser = () => {};
  const logoutUser = () => {};

  const value = {
    cart,
    favorites,
    activeUser,

    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,

    addFavorite,
    removeFavorite,

    loginUser,
    logoutUser,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}