import { useEffect } from "react";

export const Sorting = ({ selectedItems, setSelectedItems, sortValue, setSortValue }) => {
  const handleSorting = (event) => {
    setSortValue(event.target.value);
  };

  useEffect(() => {
    if (sortValue === "byPrice") {
      const sortedItems = [...selectedItems].sort(function (a, b) {
        return a.price - b.price;
      });
      setSelectedItems(sortedItems);
    } 
    
    if (sortValue === "byName") {
      const sortedItems = [...selectedItems].sort(function (a, b) {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setSelectedItems(sortedItems);
    }
    
  }, [sortValue, setSelectedItems]);

  return (
    <div className="sort_by_list_wrap">
      <select onChange={handleSorting} name="sort_by_list">
        <option value={"byName"}>By name</option>
        <option value={"byPrice"}>By price</option>
      </select>
    </div>
  );
}
