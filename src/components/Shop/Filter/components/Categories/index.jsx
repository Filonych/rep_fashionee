import { useContext } from "react";
import { ShopContext } from "../../../../../context";
import { parseData } from "../../../../../helpers/parseData";

export const Categories = () => {
  const { filter, setFilter } = useContext(ShopContext);

  const { filteredCategories } = parseData();

  return (
    <div className="sidebar_categories">
      <h4 className="sidebar_section_title">Categories</h4>
      <ul className="sidebar_category_list">
        <li
          onClick={() => {
            setFilter({ ...filter, category: "All" });
          }}
          className={
            filter.category === "All" ? "current_category" : "undefined"
          }
        >
          All
        </li>
        {filteredCategories.map((item) => (
          <li
            className={
              filter.category === item ? "current_category" : "undefined"
            }
            key={item}
            onClick={() => {
              setFilter({ ...filter, category: item });
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
