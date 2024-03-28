import { useContext } from "react";
import "./style.css";
import { AppContext } from "../../../context";

export const Card = ({ item }) => {
  const { cartItems, setCartItems, wishlistItems, setWishlistItems } =
    useContext(AppContext);

  const { id, name, price, oldPrice, image } = item;

  const itemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  const itemInWishlist = wishlistItems.some((cartItem) => cartItem.id === id);

  const addToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!itemExists) {
      const updatedCart = [...cartItems, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);

      return;
    }

    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const addToWishlist = (item) => {
    const itemExists = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (!itemExists) {
      const updatedWishlist = [...wishlistItems, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlistItems(updatedWishlist);

      return;
    }

    const updatedWishlist = wishlistItems.filter(
      (wishlistItem) => wishlistItem.id !== item.id
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="product_item_wrap">
      <img src={image} alt={name} className="product_item_img" />
      <p className="product_item_title">{name}</p>
      <div className="wrap_second_line">
        <div className="product_price_wrap">
          <p className="product_price">{price}</p>
          <p className="product_old_price">{oldPrice}</p>
        </div>
        {!itemInCart && (
          <button onClick={() => addToCart(item)} className="buy_button">
            Buy
          </button>
        )}
        {itemInCart && (
          <button onClick={() => addToCart(item)} className="remove_button">
            Remove
          </button>
        )}
      </div>

      <img
        onClick={() => addToWishlist(item)}
        className="wishlist_icon"
        src={
          itemInWishlist
            ? "img/wishlist_icon_added.svg"
            : "img/wishlist_icon.svg"
        }
        alt={item.name}
      />
    </div>
  );
};
