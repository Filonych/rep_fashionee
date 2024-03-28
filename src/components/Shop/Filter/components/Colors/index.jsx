import { useContext } from "react";
import { ShopContext } from "../../../../../context";
import { parseData } from "../../../../../helpers/parseData";

export const Colors = () => {
  const { filter, setFilter } = useContext(ShopContext);

  const { colors } = parseData();

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

  return (
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
  );
};
