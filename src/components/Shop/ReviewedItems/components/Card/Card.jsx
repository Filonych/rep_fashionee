import "./style.css";

export const Card = ({ item }) => {
  const { id, name, price, oldPrice, image } = item;

  return (
    <div key={"reviewed_wrap" + id} className="reviewed_item_wrap">
      <img
        key={"rev_img" + id}
        src={image}
        alt={name}
        className="reviewed_item_img"
      />
      <div className="reviewed_item_info">
        <p key={"reviewed_name" + id} className="reviewed_item_title">
          {name}
        </p>
        <div className="reviewed_price_wrap">
          <p key={"reviewed_price" + id} className="reviewed_price">
            {price}
          </p>
          <p key={"reviewed_oldPrice" + id} className="reviewed_old_price">
            {oldPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
