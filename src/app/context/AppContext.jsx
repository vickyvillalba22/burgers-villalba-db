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

import {
  addFavorite as addFavoriteItem,
  removeFavorite as removeFavoriteItem,
  isFavorite as checkIsFavorite,
  getFavoritesCount
} from "@/lib/favorites";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);

  useEffect(() => {

    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart(JSON.parse(savedCart));
    }

    const savedFavorites =
      localStorage.getItem("favorites");

    if (savedFavorites) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites(JSON.parse(savedFavorites));
    }

    const savedActiveUser =
      localStorage.getItem("activeUser");

    if (savedActiveUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveUser(JSON.parse(savedActiveUser));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
      
    );

  }, [cart]);

  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);

  useEffect(() => {
    if (activeUser) {
      localStorage.setItem(
        "activeUser",
        JSON.stringify(activeUser)
      );
    }
  }, [activeUser]);

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


  // Favorites ----------------------------------------------

  const favoritesCount = getFavoritesCount(favorites);

  const addFavorite = (product) => {
    setFavorites((prevFavorites) =>
      addFavoriteItem(prevFavorites, product)
    );
  };

  const removeFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      removeFavoriteItem(prevFavorites, productId)
    );
  };

  const isProductFavorite = (productId) =>
    checkIsFavorite(favorites, productId);

  // User
  const loginUser = (user) => {
    setActiveUser(user);
  };
  const logoutUser = () => {
    setActiveUser(null);
    localStorage.removeItem("activeUser");
  };

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

    checkoutData,
    setCheckoutData,

    favorites,
    favoritesCount,
    activeUser,

    addFavorite,
    removeFavorite,
    isProductFavorite,

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