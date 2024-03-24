import { filterProducts } from "../../../helpers/filterProducts";
import "./style.css";
import { useState, useEffect } from "react";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  searchValue,
  filter,
  sortValue,
  setProductsInfo,
}) => {
  const [pagination, setPagination] = useState([]);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);

    const updatedProductsInfo = filterProducts(
      searchValue,
      filter,
      sortValue,
      page
    );

    setProductsInfo(updatedProductsInfo);
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
};
