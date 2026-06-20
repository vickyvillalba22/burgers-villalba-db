"use client";

import { createContext, useContext, useState } from "react";

import { useEffect } from "react";

import {
  addCartItem,
  removeCartItem,
  updateCartItemQuantity,
  getCartTotal,
  getCartItemsCount
} from "@/lib/cart";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {

    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart(JSON.parse(savedCart));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
      
    );

  }, [cart]);

  const [favorites, setFavorites] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  //CART ----------------------------------------------

  const cartTotal = getCartTotal(cart);

  const cartItemsCount = getCartItemsCount(cart)

  const addToCart = (product, customization)=>{

    console.log("ADD TO CART");

    setCart((prevCart) =>
      addCartItem(
        prevCart,
        product,
        customization
      )
    );

     openCart();
  }

  const removeFromCart = (
    cartItemId
  ) => {
    setCart((prevCart) =>
      removeCartItem(
        prevCart,
        cartItemId
      )
    );
  };

  const updateQuantity = (
    cartItemId,
    quantity
  ) => {

    setCart((prevCart) =>
      updateCartItemQuantity(
        prevCart,
        cartItemId,
        quantity
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);

  const closeCart = () => setIsCartOpen(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };


  // Favorites
  const addFavorite = () => {};
  const removeFavorite = () => {};

  // User
  const loginUser = () => {};
  const logoutUser = () => {};

  const value = {
    cart,
    cartTotal,
    cartItemsCount,

    isCartOpen,
    openCart,
    closeCart,
    toggleCart,

    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    favorites,
    activeUser,

    addFavorite,
    removeFavorite,

    loginUser,
    logoutUser,
  };

  console.log("cart", cart);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}