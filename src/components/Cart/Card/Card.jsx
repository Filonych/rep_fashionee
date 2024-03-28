import { useContext } from "react";
import "./style.css";
import { AppContext } from "../../../context";

export const Card = ({ item }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const { id, name, price, oldPrice, image, quantity } = item;

  const onMinus = (id) => {
    const filteredItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 1) - 1 };
      }

      return item;
    });

    const updatedItems = filteredItems.filter((item) => item.quantity !== 0);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCartItems(updatedItems);
  };

  const onPlus = (id) => {
    const filteredItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    setCartItems(filteredItems);
  };

  const deleteCartItem = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    setCartItems(filteredItems);
  };

  return (
    <div className="item_wrap">
      <img src={image} alt={name} className="item_img" />
      <div className="item_info_wrap">
        <p className="item_title">{name}</p>
        <div className="item_number">
          <p className="item_oldPrice">{oldPrice}</p>
          <p className="item_newPrice">{price}</p>
          <div className="item_quantity_wrap">
            <div className="item_signs" onClick={() => onMinus(id)}>
              -
            </div>
            <div>{quantity || 1}</div>
            <div className="item_signs" onClick={() => onPlus(id)}>
              +
            </div>
          </div>
        </div>
      </div>
      <div className="item_finalPrice">
        {(price * (quantity || 1)).toFixed(2)}
      </div>
      <img
        className="close_button"
        onClick={() => deleteCartItem(id)}
        src="img/x.svg"
        alt=""
      />
    </div>
  );
};
