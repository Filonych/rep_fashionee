import data from "../products.json";

const ITEMS_PER_PAGE = 12;

export const filterProducts = (searchValue, filter, sortValue, currentPage) => {
  let products = [...data.products];

  if (searchValue) {
    products = products.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (filter.category !== "All") {
    products = products.filter((item) =>
      item.categories.includes(filter.category)
    );
  }

  if (filter.colors.length > 0) {
    products = products.filter((item) => filter.colors.includes(item.color));
  }

  if (filter.minPrice || filter.maxPrice) {
    products = products.filter(
      (item) => item.price >= filter.minPrice && item.price <= filter.maxPrice
    );
  }

  if (sortValue === "byPrice") {
    products = [...products].sort(function (a, b) {
      return a.price - b.price;
    });
  }

  if (sortValue === "byName") {
    products = [...products].sort(function (a, b) {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }

  const productsTotal = products;
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  products = products.slice(firstIndex, lastIndex);

  return { products, productsTotal, totalPages };
};
