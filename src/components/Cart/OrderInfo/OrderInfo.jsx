import { useContext, useMemo } from "react";
import "./style.css";
import { AppContext } from "../../../context";

const COST_OF_DELIVERY = 15;

export const OrderInfo = ({ promoState }) => {
  const { cartItems } = useContext(AppContext);

  const price = useMemo(() => {
    return parseFloat(
      cartItems.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      )
    ).toFixed(2);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return promoState ? (price - price * 0.1).toFixed(2) : price;
  }, [price, promoState]);

  const checkout = () => {
    cartItems.forEach((item) => {
      const { name, price, quantity } = item;
      console.log(
        `${name} - $${price}, ${quantity > 1 ? quantity + " items" : "1 item"}`
      );
    });
    console.log(
      `Discount: ${promoState ? `$${(price * 0.1).toFixed(2)}` : "0%"}`
    );
    console.log(`Delivery: $${COST_OF_DELIVERY}`);
    console.log(`Total: $${(+totalPrice + COST_OF_DELIVERY).toFixed(2)}`);
  };

  return (
    <div className="order_wrap">
      <div className="order_main_title">Your order</div>
      <div className="order_info_wrap">
        <div className="order_info">
          <p className="order_title">Оrder price</p>
          <p className="order_price">{price}</p>
        </div>
        <div className="order_info">
          <p className="order_title">Discount for promo code</p>
          <p className="order_discount">{promoState ? "10%" : "0%"}</p>
        </div>
        <div className="order_info">
          <p className="order_title">Delivery (Aug 02 at 16:00)</p>
          <p className="order_delivery">{`$${COST_OF_DELIVERY}`}</p>
        </div>
        <div className="order_info">
          <p className="order_title">Total</p>
          <p className="order_total">
            {(+totalPrice + COST_OF_DELIVERY).toFixed(2)}
          </p>
        </div>
      </div>
      <button onClick={checkout} className="order_checkout">
        Checkout
      </button>
    </div>
  );
};
