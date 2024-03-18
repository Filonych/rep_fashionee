export const Search = ({ handleInputChange }) => (
  <div className="sidebar_search_wrap">
    <input
      onChange={handleInputChange}
      className="sidebar_search_input"
      placeholder="Search"
    />
    <img src="img/search.svg" alt="" />
  </div>
);
