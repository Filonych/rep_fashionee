import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context";
import { Sorting } from "../../components/Shop/Sorting/Sorting";
import { ReviewedItems } from "../../components/Shop/ReviewedItems/ReviewedItems";
import { Card } from "../../components/Shop/Card/Card";
import { Pagination } from "../../components/Shop/Pagination/Pagination";
import { Filter } from "../../components/Shop/Filter/Filter";
import { Subscribe } from "../../components/Shop/Subscribe";
import { TotalProducts } from "../../components/Shop/TotalProducts";
import { filterProducts } from "../../helpers/filterProducts";
import { parseData } from "../../helpers/parseData";

export const Shop = () => {
  const { cartItems, setCartItems, wishlistItems, setWishlistItems } =
    useContext(AppContext);
  const { prices } = parseData();

  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState({
    category: "All",
    minPrice: prices.minPrice,
    maxPrice: prices.maxPrice,
    colors: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState("");

  const { products, productsTotal, totalPages } = filterProducts(
    searchValue,
    filter,
    sortValue,
    currentPage
  );
  const [productsInfo, setProductsInfo] = useState({
    products,
    productsTotal,
    totalPages,
  });

  const updateProducts = (newValue, filter, sortValue) => {
    setCurrentPage(1);
    const currentPage = 1;

    const updatedProductsInfo = filterProducts(
      newValue,
      filter,
      sortValue,
      currentPage
    );
    setProductsInfo(updatedProductsInfo);
  };

  const addToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!itemExists) {
      const updatedCart = [...cartItems, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);

      return;
    }

    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const addToWishlist = (item) => {
    const itemExists = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (!itemExists) {
      const updatedWishlist = [...wishlistItems, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlistItems(updatedWishlist);

      return;
    }

    const updatedWishlist = wishlistItems.filter(
      (wishlistItem) => wishlistItem.id !== item.id
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
  };

  return (
    <div>
      <div className="main_section">
        <div className="sidebar_wrap">
          <Filter
            sortValue={sortValue}
            filter={filter}
            setFilter={setFilter}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            updateProducts={updateProducts}
          />
          <ReviewedItems />
          <div className="sidebar_sale_banner">
            <span>season</span>
            <br />
            SALE
          </div>
        </div>

        <div className="main_section_center">
          <div className="main_section_center_first-line">
            <TotalProducts
              numberOfProducts={productsInfo.productsTotal.length}
            />
            <Sorting
              setSortValue={setSortValue}
              searchValue={searchValue}
              filter={filter}
              updateProducts={updateProducts}
            />
          </div>
          <div className="products_wrap">
            {productsInfo.products.map((item) => (
              <Card
                key={item.id}
                item={item}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
                wishlistItems={wishlistItems}
                cartItems={cartItems}
              />
            ))}
          </div>
          <Pagination
            products={productsInfo.products}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={productsInfo.totalPages}
            sortValue={sortValue}
            filter={filter}
            searchValue={searchValue}
            setProductsInfo={setProductsInfo}
          />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};
