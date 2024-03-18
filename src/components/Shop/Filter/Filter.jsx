import { useState, useCallback } from "react";
import { filterProducts } from "../../../helpers/filterProducts";
import { parseData } from "../../../helpers/parseData";
import { Categories } from "./components/Categories";
import { Price } from "./components/Price";
import { Colors } from "./components/Colors";
import { Button } from "./components/Button";
import { Search } from "./components/Search";
import "./style.css";

export const Filter = ({ setSelectedItems, setCurrentPage, sortValue }) => {
  const [searchValue, setSearchValue] = useState("");
  const { filteredCategories, colors, prices } = parseData();

  const [filter, setFilter] = useState({
    category: "All",
    minPrice: prices.minPrice,
    maxPrice: prices.maxPrice,
    colors: [],
  });

  const applyFilter = () => {
    setCurrentPage(1);

    const products = filterProducts(searchValue, filter, sortValue);
    setSelectedItems(products);
  };

  const onToggleColor = (color) => {
    setFilter((prevFilter) => {
      const updatedColors = prevFilter.colors.includes(color)
        ? prevFilter.colors.filter((c) => c !== color)
        : [...prevFilter.colors, color];
      return {
        ...prevFilter,
        colors: updatedColors,
      };
    });
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    debouncedFilterProducts(newValue);
  };

  const updateProducts = (newValue) => {
    setCurrentPage(1);
    const products = filterProducts(newValue, filter, sortValue);
    setSelectedItems(products);
  };

  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // без useCallback не работает debounce
  // я пробовала выносить debounce в отдельный файл, но не работает как надо

  const debouncedFilterProducts = useCallback(
    debounce((newValue) => updateProducts(newValue), 500),
    []
  );

  return (
    <>
      <Search handleInputChange={handleInputChange} />
      <Categories
        filter={filter}
        setFilter={setFilter}
        filteredCategories={filteredCategories}
      />

      <Price filter={filter} setFilter={setFilter} />
      <Colors filter={filter} onToggleColor={onToggleColor} colors={colors} />
      <Button applyFilter={applyFilter} />
    </>
  );
};
