import { Categories } from "./components/Categories";
import { Price } from "./components/Price";
import { Colors } from "./components/Colors";
import { Button } from "./components/Button";
import { Search } from "./components/Search";
import { useDebounce } from "../../../hooks/useDebounce";
import { parseData } from "../../../helpers/parseData";
import "./style.css";

export const Filter = ({
  sortValue,
  filter,
  setFilter,
  searchValue,
  setSearchValue,
  updateProducts,
}) => {
  const { filteredCategories, colors } = parseData();

  const applyFilter = () => {
    updateProducts(searchValue, filter, sortValue);
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
    updateProducts(newValue, filter, sortValue);
  };

  const debouncedInputChange = useDebounce(handleInputChange, 500);

  return (
    <>
      <Search handleInputChange={debouncedInputChange} />
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
