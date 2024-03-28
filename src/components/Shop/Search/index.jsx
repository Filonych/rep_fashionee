import { useContext } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { ShopContext } from "../../../context";

export const Search = () => {
  const { setSearchValue, filter, sortValue, updateProducts } =
    useContext(ShopContext);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    updateProducts(newValue, filter, sortValue);
  };

  const debouncedInputChange = useDebounce(handleInputChange, 500);

  return (
    <div className="sidebar_search_wrap">
      <input
        onChange={debouncedInputChange}
        className="sidebar_search_input"
        placeholder="Search"
      />
      <img src="img/search.svg" alt="" />
    </div>
  );
};
