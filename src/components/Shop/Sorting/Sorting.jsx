export const Sorting = ({
  setSortValue,
  searchValue,
  filter,
  updateProducts,
}) => {
  const handleSorting = (event) => {
    const selectedSortValue = event.target.value;
    setSortValue(selectedSortValue);

    updateProducts(searchValue, filter, selectedSortValue);
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
