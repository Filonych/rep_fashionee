import React, { useContext } from "react";
import "./style.css";
import { AppContext } from "../../../context";

export const Header = ({ setActivePage }) => {
  const { cartItems, wishlistItems } = useContext(AppContext);

  return (
    <header className="header">
      <div className="nav_left">
        <img src="img/burger_menu.svg" alt="" />
        <img className="logo_img" src="img/logo.png" alt="" />
        <ul className="nav_list">
          <li>Home</li>
          <li className="dd_menu">
            Pages{" "}
            <svg
              className="chevron"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 5.25L7 8.75L10.5 5.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className="dd_menu" onClick={() => setActivePage("Shop")}>
            Shop{" "}
            <svg
              className="chevron"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 5.25L7 8.75L10.5 5.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav_right">
        <img src="img/search.svg" className="nav_icon" alt="" />
        <img src="img/user.svg" className="nav_icon" alt="" />
        <div className="counter_wrap">
          <img src="img/wishlist.svg" className="nav_icon" alt="" />
          <div className="black_circle">
            <p className="counter">{wishlistItems.length}</p>
          </div>
        </div>
        <div className="counter_wrap">
          <img
            src="img/shopping-bag.svg"
            onClick={() => setActivePage("Cart")}
            className="nav_icon"
            alt=""
          />
          <div className="black_circle">
            <p className="counter">{cartItems.length}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
