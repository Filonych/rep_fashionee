import { ShopContext } from "../../../context";
import { filterProducts } from "../../../helpers/filterProducts";
import "./style.css";
import { useState, useEffect, useContext } from "react";

export const Pagination = () => {
  const {
    searchValue,
    filter,
    currentPage,
    setCurrentPage,
    sortValue,
    setProductsInfo,
    productsInfo,
  } = useContext(ShopContext);

  const [pagination, setPagination] = useState(null);

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
    for (let i = 0; i < productsInfo.totalPages; i++) {
      tempPagination.push(i + 1);
    }
    setPagination(tempPagination);
  }, [productsInfo.totalPages]);

  return (
    <div className="pagination">
      {pagination &&
        pagination.map((page) => (
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
