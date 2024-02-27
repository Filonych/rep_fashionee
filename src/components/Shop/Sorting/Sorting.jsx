import { useEffect } from "react";

export const Sorting = ({
  setSelectedItems,
  setSortValue,
  setCurrentPage,
}) => {
  const handleSorting = (event) => {
    const selectedSortValue = event.target.value;
    setSortValue(selectedSortValue);

    setCurrentPage(1);

    if (selectedSortValue === "byPrice") {
      setSelectedItems((prevItems) =>
        [...prevItems].sort((a, b) => a.price - b.price)
      );
    } else if (selectedSortValue === "byName") {
      setSelectedItems((prevItems) =>
        [...prevItems].sort((a, b) => a.name.localeCompare(b.name))
      );
    }
  };

  return (
    <div className="sort_by_list_wrap">
      <select onChange={handleSorting} name="sort_by_list">
        <option value={"byName"}>By name</option>
        <option value={"byPrice"}>By price</option>
      </select>
    </div>
  );
};
