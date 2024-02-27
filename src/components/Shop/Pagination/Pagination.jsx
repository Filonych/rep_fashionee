import "./style.css";

import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 12;

function Pagination({
  setSlicedItems,
  currentPage,
  selectedItems,
  setCurrentPage,
}) {
  const [pagination, setPagination] = useState([]);

  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(selectedItems.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const newSlicedItems = selectedItems.slice(firstIndex, lastIndex);
    setSlicedItems(newSlicedItems);
  }, [firstIndex, lastIndex, currentPage, selectedItems, setSlicedItems]);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const tempPagination = [];
    for (let i = 0; i < totalPages; i++) {
      tempPagination.push(i + 1);
    }
    setPagination(tempPagination);
  }, [totalPages]);

  return (
    <div className="pagination">
      {pagination.map((page) => (
        <div
          key={page}
          onClick={() => changeCurrentPage(page)}
          className={currentPage === page ? "currentPage" : "page"}
        >
          {page}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
