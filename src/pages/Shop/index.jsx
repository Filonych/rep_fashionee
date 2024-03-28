import { useContext } from "react";
import { Sorter } from "../../components/Shop/Sorter/Sorter";
import { ReviewedItems } from "../../components/Shop/ReviewedItems/ReviewedItems";
import { Pagination } from "../../components/Shop/Pagination/Pagination";
import { Filter } from "../../components/Shop/Filter/Filter";
import { Subscribe } from "../../components/Shop/Subscribe";
import { TotalProducts } from "../../components/Shop/TotalProducts";
import { Search } from "../../components/Shop/Search";
import { ShopContext } from "../../context";
import { SaleBanner } from "../../components/common/SaleBanner";
import { Products } from "../../components/Shop/Products";

export const Shop = () => {
  const { productsInfo } = useContext(ShopContext);

  return (
    <div>
      <div className="main_section">
        <div className="sidebar_wrap">
          <Search />
          <Filter />
          <ReviewedItems />
          <SaleBanner />
        </div>
        <div className="main_section_center">
          <div className="main_section_center_first-line">
            <TotalProducts />
            <Sorter />
          </div>
          <Products products={productsInfo.products} />
          <Pagination />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};
