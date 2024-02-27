import React from "react";
import { useState } from "react";
import { Footer } from "./components/common/Footer/Footer";
import { Header } from "./components/common/Header/Header";
import { Shop } from "./pages/Shop/index.jsx";
import { Cart } from "./pages/Cart/index.jsx";
import { AppContext } from "./context";
import "./App.css";

export const App = () => {
  const [activePage, setActivePage] = useState("Shop");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [slicedItems, setSlicedItems] = useState([]);

  const cartCounter = cartItems.length;
  const wishlistCounter = wishlistItems.length;

  const changeActivePage = (page) => {
    if (page !== "Cart" && page !== "Shop") {
      return;
    }
    setActivePage(page);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        wishlistItems,
        setWishlistItems,
      }}
    >
      <div className="App">
        <Header
          setActivePage={changeActivePage}
          cartCounter={cartCounter}
          wishlistCounter={wishlistCounter}
        />

        {activePage === "Shop" && (
          <Shop slicedItems={slicedItems} setSlicedItems={setSlicedItems} />
        )}
        {activePage === "Cart" && <Cart />}

        <Footer />
      </div>
    </AppContext.Provider>
  );
}
