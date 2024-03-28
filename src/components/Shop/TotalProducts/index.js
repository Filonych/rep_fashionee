import { useContext } from "react";
import { ShopContext } from "../../../context";

export const TotalProducts = () => {
  const { productsInfo } = useContext(ShopContext);
  return (
    <div className="products_in_the_category">
      There are {productsInfo.productsTotal} products in this category
    </div>
  );
};
