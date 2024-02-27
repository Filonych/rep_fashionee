import { useContext, useState } from "react";
import { AppContext } from "../../context";
import "./cart.css";
import { FindUsHere } from "../../components/common/FindUsHere/FindUsHere";
import { OrderInfo } from "../../components/Cart/OrderInfo/OrderInfo";
import { PromoForm } from "../../components/Cart/PromoForm/PromoForm";
import { Card } from "../../components/Cart/Card/Card";
import { FirstScreen } from "../../components/common/FirstScreen/FirstScreen";

export const Cart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [promoCode, setPromoCode] = useState("");
  const [promoState, setPromoState] = useState(false);

  return (
    <div>
      <FirstScreen name="Cart" />
      <div className="cart_main_wrap">
        <div className="center_wrap">
          <div className="items_wrap">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                item={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>
          <OrderInfo cartItems={cartItems} promoState={promoState} />
        </div>
        <PromoForm
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          setPromoState={setPromoState}
        />
        <FindUsHere />
      </div>
    </div>
  );
}
