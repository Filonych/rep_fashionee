import { useState } from "react";
import "./style.css";

const PROMOTION_CODE = "ilovereact";

export const PromoForm = ({ setPromoState }) => {
  const [promoCode, setPromoCode] = useState(null);

  const onChangePromo = (e) => {
    setPromoCode(e.target.value);
  };

  const onSubmitPromo = (e) => {
    e.preventDefault();
    if (promoCode === PROMOTION_CODE) {
      setPromoState(true);
    } else {
      setPromoState(false);
    }
  };

  return (
    <div className="wrap">
      <p className="title">You have a promo code?</p>
      <p className="info">
        To receive up-to-date promotional codes, subscribe to us on social
        networks.
      </p>
      <form onSubmit={onSubmitPromo} className="form">
        <input
          className="input"
          type="text"
          placeholder="Enter promo code"
          onChange={onChangePromo}
        />
        <button type="submit" className="button">
          &gt;
        </button>
      </form>
    </div>
  );
};
