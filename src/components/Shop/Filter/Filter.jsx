import { Categories } from "./components/Categories";
import { Price } from "./components/Price";
import { Colors } from "./components/Colors";
import { Button } from "./components/Button";
import "./style.css";
import { useContext } from "react";
import { ShopContext } from "../../../context";

export const Filter = () => {
  const { searchValue, filter, sortValue, updateProducts } =
    useContext(ShopContext);

  const applyFilter = () => {
    updateProducts(searchValue, filter, sortValue);
  };

  return (
    <>
      <Categories />
      <Price />
      <Colors />
      <Button applyFilter={applyFilter} />
    </>
  );
};
