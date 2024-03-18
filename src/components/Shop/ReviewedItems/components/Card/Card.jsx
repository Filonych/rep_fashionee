import "./style.css";

export const Card = ({ item }) => {
  const { name, price, oldPrice, image } = item;

  return (
    <div className="reviewed_item_wrap">
      <img
        src={image}
        alt={name}
        className="reviewed_item_img"
      />
      <div className="reviewed_item_info">
        <p className="reviewed_item_title">
          {name}
        </p>
        <div className="reviewed_price_wrap">
          <p className="reviewed_price">
            {price}
          </p>
          <p className="reviewed_old_price">
            {oldPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
