import { useState } from "react";
import { AppContext } from "../context";

export const ProviderApp = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        wishlistItems,
        setWishlistItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
