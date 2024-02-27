import React from "react";
import "./style.css";
import { FindUsHere } from "../FindUsHere/FindUsHere";

export const Footer = () => {
  return (
    <footer>
      <div className="border"></div>
      <div className="content_wrap">
        <div className="content_first">
          <img className="logo_img logo_img" src="img/logo.png" alt="" />
          <p className="content_first_text">
            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
            excepteur voluptate.
          </p>
          <hr />
          <FindUsHere />
        </div>
        <div className="content_second">
          <p className="title">About</p>
          <ul className="list">
            <li className="about_item">About us</li>
            <li className="about_item">Collections</li>
            <li className="about_item">Shop</li>
            <li className="about_item">Blog</li>
            <li className="about_item">Contact us</li>
          </ul>
        </div>
        <div className="content_third">
          <p className="title">Useful links</p>
          <ul className="list">
            <li className="links_item">Privacy Policy</li>
            <li className="links_item">Terms of use</li>
            <li className="links_item">Support</li>
            <li className="links_item">Shipping details</li>
            <li className="links_item">FAQs</li>
          </ul>
        </div>
        <div className="content_fourth">
          <p className="title">Newsletter</p>
          <p className="content_fourth_text">
            Subscribe to be the first to hear about deals, offers and upcoming
            collections.
          </p>
          <div className="content_fourth_enter_email_wrap">
            <input
              className="content_fourth_input"
              placeholder="Enter your email"
            ></input>
            <svg
              className="content_fourth_send_icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L11 13"
                stroke="#444444"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="#444444"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom_wrap">
        <p className="bottom_text">© All right reserved. Fashionee 2020</p>
        <div className="bottom_payment_wrap">
          <span>Payment methods:</span>
          <div className="bottom_payment_img_wrap">
            <img
              className="bottom_payment_img"
              src="img/payment_method (1).png"
              alt="visa"
            />
            <img
              className="bottom_payment_img"
              src="img/payment_method (2).png"
              alt="master"
            />
            <img
              className="bottom_payment_img"
              src="img/payment_method (3).png"
              alt="paypal"
            />
            <img
              className="bottom_payment_img"
              src="img/payment_method (4).png"
              alt="payoneer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
