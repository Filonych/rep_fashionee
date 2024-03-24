import React from "react";
import { useState } from "react";
import { Footer } from "./components/common/Footer/Footer";
import { Header } from "./components/common/Header/Header";
import { Shop } from "./pages/Shop/index.jsx";
import { Cart } from "./pages/Cart/index.jsx";
import { AppContext } from "./context";
import "./App.css";
import { FirstScreen } from "./components/common/FirstScreen/FirstScreen.jsx";

export const App = () => {
  const [activePage, setActivePage] = useState("Shop");

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

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
        <Header setActivePage={changeActivePage} />
        <FirstScreen name={activePage} />

        {activePage === "Shop" && <Shop />}
        {activePage === "Cart" && <Cart />}

        <Footer />
      </div>
    </AppContext.Provider>
  );
};
