export const Button = ({ applyFilter }) => (
  <div className="sidebar_filter_button_wrap">
    <button
      onClick={() => applyFilter()}
      type="button"
      className="sidebar_filter_button"
    >
      Apply Filter
    </button>
  </div>
);
