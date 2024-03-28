import React from "react";
import { useState } from "react";
import { Footer } from "./components/common/Footer/Footer";
import { Header } from "./components/common/Header/Header";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import "./App.css";
import { FirstScreen } from "./components/common/FirstScreen/FirstScreen.jsx";
import { ProviderApp } from "./HOCs/ProviderApp.jsx";
import { ProviderShop } from "./HOCs/ProviderShop.jsx";

export const App = () => {
  const [activePage, setActivePage] = useState("Shop");

  const changeActivePage = (page) => {
    if (page !== "Cart" && page !== "Shop") {
      return;
    }
    setActivePage(page);
  };

  return (
    <ProviderApp>
      <div className="App">
        <Header setActivePage={changeActivePage} />
        <FirstScreen name={activePage} />

        {activePage === "Shop" && (
          <ProviderShop>
            <Shop />
          </ProviderShop>
        )}
        {activePage === "Cart" && <Cart />}

        <Footer />
      </div>
    </ProviderApp>
  );
};
