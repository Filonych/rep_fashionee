import { useState } from "react";
import { Categories } from "../../../components/Shop/Categories/Categories";
import { filterProducts } from "../../../helpers/filterProducts";
import { parseData } from "../../../helpers/parseData";
import "./style.css";
import { useCallback } from "react";

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
    console.log(newValue);
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
      <div className="sidebar_search_wrap">
        <input
          onChange={handleInputChange}
          className="sidebar_search_input"
          placeholder="Search"
        />
        <img src="img/search.svg" alt="" />
      </div>
      <Categories
        filter={filter}
        setFilter={setFilter}
        filteredCategories={filteredCategories}
      />

      <div className="sidebar_price">
        <h4 className="sidebar_section_title">Price</h4>
        <input
          className="min_price"
          placeholder="Min"
          onChange={(event) =>
            setFilter({ ...filter, minPrice: event.target.value })
          }
        />
        <input
          className="max_price"
          placeholder="Max"
          onChange={(event) =>
            setFilter({ ...filter, maxPrice: event.target.value })
          }
        />
      </div>
      <div className="sidebar_colors">
        <h4 className="sidebar_section_title">Colors</h4>
        <div className="sidebar_colors_wrap">
          {colors.map((item) => (
            <label key={item} className="container">
              {item}
              <input
                type="checkbox"
                checked={filter.colors.includes(item)}
                onChange={() => onToggleColor(item)}
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
        <div className="sidebar_colors_deploy_wrap">
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="2.66675"
              width="2"
              height="15"
              transform="rotate(-90 0 2.66675)"
              fill="#FF8E8E"
            />
            <path d="M8 9L4.5359 5L11.4641 5L8 9Z" fill="#FF8E8E" />
          </svg>
          <span>Deploy</span>
        </div>
      </div>
      <div className="sidebar_filter_button_wrap">
        <button
          onClick={() => applyFilter()}
          type="button"
          className="sidebar_filter_button"
        >
          Apply Filter
        </button>
      </div>
    </>
  );
};
