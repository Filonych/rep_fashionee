import { useState } from "react";
import { ShopContext } from "../context";
import { filterProducts } from "../helpers/filterProducts";
import { parseData } from "../helpers/parseData";

const { prices } = parseData();

export const ProviderShop = ({ children }) => {
  const [searchValue, setSearchValue] = useState(null);
  const [filter, setFilter] = useState({
    category: "All",
    minPrice: prices.minPrice,
    maxPrice: prices.maxPrice,
    colors: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState("byDefault");

  const [productsInfo, setProductsInfo] = useState(
    filterProducts(searchValue, filter, sortValue, currentPage)
  );

  const updateProducts = (newValue, filter, sortValue) => {
    setCurrentPage(1);
    const currentPage = 1;

    const updatedProductsInfo = filterProducts(
      newValue,
      filter,
      sortValue,
      currentPage
    );
    setProductsInfo(updatedProductsInfo);
  };

  return (
    <ShopContext.Provider
      value={{
        searchValue,
        setSearchValue,
        filter,
        setFilter,
        currentPage,
        setCurrentPage,
        sortValue,
        setSortValue,
        productsInfo,
        setProductsInfo,
        updateProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
