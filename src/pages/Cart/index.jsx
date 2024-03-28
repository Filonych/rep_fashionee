import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { FindUsHere } from "../../components/common/FindUsHere/FindUsHere";
import { OrderInfo } from "../../components/Cart/OrderInfo/OrderInfo";
import { PromoForm } from "../../components/Cart/PromoForm/PromoForm";
import { Card } from "../../components/Cart/Card/Card";
import "./cart.css";

export const Cart = () => {
  const { cartItems } = useContext(AppContext);
  const [promoState, setPromoState] = useState(false);

  return (
    <div>
      <div className="cart_main_wrap">
        <div className="center_wrap">
          <div className="items_wrap">
            {cartItems.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <OrderInfo promoState={promoState} />
        </div>
        <PromoForm setPromoState={setPromoState} />
        <FindUsHere />
      </div>
    </div>
  );
};
