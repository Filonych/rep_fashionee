import { useState } from "react";
import { useEffect, useContext } from "react";
import { AppContext } from "../../context";
import data from "../../products.json";

import Sorting from "../../components/Shop/Sorting/Sorting";
import ReviewedItems from "../../components/Shop/ReviewedItems/ReviewedItems";
import Card from "../../components/Shop/Card/Card";
import Pagination from "../../components/Shop/Pagination/Pagination";
import Filter from "../../components/Shop/Filter/Filter";
import FirstScreen from "../../components/common/FirstScreen/FirstScreen";

function Shop({ slicedItems, setSlicedItems }) {
  const { cartItems, setCartItems, wishlistItems, setWishlistItems } =
    useContext(AppContext);

  const [selectedItems, setSelectedItems] = useState(data.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState("");

  const numberOfProducts = selectedItems.length;

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

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart"));
    setCartItems(savedCartItems || []);

    const savedWishlistItems = JSON.parse(localStorage.getItem("wishlist"));
    setWishlistItems(savedWishlistItems || []);
  }, [setCartItems, setWishlistItems]);

  return (
    <div>
      <FirstScreen name="Shop" />
      <div className="main_section">
        <div className="sidebar_wrap">
          <Filter
            setSelectedItems={setSelectedItems}
            setCurrentPage={setCurrentPage}
            selectedItems={selectedItems}
            sortValue={sortValue}
          />
          <ReviewedItems />
          <div className="sidebar_sale_banner">
            <span>season</span>
            <br />
            SALE
          </div>
        </div>

        <div className="main_section_center">
          <div className="main_section_center_first-line">
            <div className="products_in_the_category">
              There are {numberOfProducts} products in this category
            </div>
            <Sorting
              sortValue={sortValue}
              setSortValue={setSortValue}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>
          <div className="products_wrap">
            {slicedItems.map((item) => (
              <Card
                item={item}
                key={item.id}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
                wishlistItems={wishlistItems}
                cartItems={cartItems}
              />
            ))}
          </div>
          <Pagination
            selectedItems={selectedItems}
            setSlicedItems={setSlicedItems}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className="subscribe_section">
        <div className="subscribe_section_form">
          <h3 className="subscribe_section_title">Newsletter</h3>
          <p className="subscribe_section_subtitle">
            Be the first to hear about deals, offers and upcoming collections.
          </p>
          <div className="subscribe_section_input_wrap">
            <input
              className="subscribe_section_input"
              placeholder="Enter your email"
            ></input>
            <button className="subscribe_section_button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;