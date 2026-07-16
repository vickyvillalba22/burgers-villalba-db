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

async function requestFavorites(userId) {
  const response = await fetch(`/api/users/${userId}/favorites`);
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Error al obtener favoritos");
  }

  return data.favorites;
}

async function requestAddFavorite(userId, productId) {
  const response = await fetch(`/api/users/${userId}/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Error al agregar favorito");
  }

  return data.favorites;
}

async function requestRemoveFavorite(userId, productId) {
  const response = await fetch(`/api/users/${userId}/favorites/${productId}`, {
    method: "DELETE",
  });
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Error al eliminar favorito");
  }

  return data.favorites;
}

async function requestSyncFavorites(userId, favoriteIds) {
  const response = await fetch(`/api/users/${userId}/favorites/sync`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ favoriteIds }),
  });
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Error al sincronizar favoritos");
  }

  return data.favorites;
}

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

    const savedActiveUser =
      localStorage.getItem("activeUser");

    if (savedActiveUser) {
      const parsedActiveUser = JSON.parse(savedActiveUser);
      setActiveUser(parsedActiveUser);
      requestFavorites(parsedActiveUser._id)
        .then((updatedFavorites) => setFavorites(updatedFavorites))
        .catch((error) =>
          console.error("Error loading favorites:", error)
        );
      return;
    }

    const savedFavorites =
      localStorage.getItem("favorites");

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
      
    );

  }, [cart]);

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

  const loadFavorites = async (user = activeUser) => {
    if (!user) {
      const savedFavorites =
        localStorage.getItem("favorites");

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
        return JSON.parse(savedFavorites);
      }

      setFavorites([]);
      return [];
    }

    try {
      const updatedFavorites = await requestFavorites(user._id);
      setFavorites(updatedFavorites);
      return updatedFavorites;
    } catch (error) {
      console.error("Error loading favorites:", error);
      return favorites;
    }
  };

  const syncFavorites = async (user = activeUser) => {
    if (!user) {
      return favorites;
    }

    const savedFavorites =
      localStorage.getItem("favorites");

    const temporaryFavorites = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    const favoriteIds = temporaryFavorites.map((product) => product._id);

    try {
      if (favoriteIds.length === 0) {
        return await loadFavorites(user);
      }

      const updatedFavorites = await requestSyncFavorites(user._id, favoriteIds);
      setFavorites(updatedFavorites);
      localStorage.removeItem("favorites");
      return updatedFavorites;
    } catch (error) {
      console.error("Error syncing favorites:", error);
      return favorites;
    }
  };

  const addFavorite = async (product) => {
    if (activeUser) {
      try {
        const updatedFavorites = await requestAddFavorite(
          activeUser._id,
          product._id
        );
        setFavorites(updatedFavorites);
      } catch (error) {
        console.error("Error adding favorite:", error);
      }

      return;
    }

    setFavorites((prevFavorites) => {
      const updatedFavorites = addFavoriteItem(prevFavorites, product);
      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );
      return updatedFavorites;
    });
  };

  const removeFavorite = async (productId) => {
    if (activeUser) {
      try {
        const updatedFavorites = await requestRemoveFavorite(
          activeUser._id,
          productId
        );
        setFavorites(updatedFavorites);
      } catch (error) {
        console.error("Error removing favorite:", error);
      }

      return;
    }

    setFavorites((prevFavorites) => {
      const updatedFavorites = removeFavoriteItem(prevFavorites, productId);
      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );
      return updatedFavorites;
    });
  };

  const isFavorite = (productId) =>
    checkIsFavorite(favorites, productId);

  const isProductFavorite = isFavorite;

  const toggleFavorite = (product) => {
    if (isFavorite(product._id)) {
      removeFavorite(product._id);
      return;
    }

    addFavorite(product);
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  // User
  const loginUser = async (user) => {
    setActiveUser(user);
    localStorage.setItem(
      "activeUser",
      JSON.stringify(user)
    );
    await syncFavorites(user);
  };

  const logoutUser = () => {
    setActiveUser(null);
    setFavorites([]);
    localStorage.removeItem("activeUser");
    localStorage.removeItem("favorites");
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
    loadFavorites,
    isFavorite,
    isProductFavorite,
    toggleFavorite,
    syncFavorites,
    clearFavorites,

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
