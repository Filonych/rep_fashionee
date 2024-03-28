import data from "../products.json";

const ITEMS_PER_PAGE = 12;

const searchByInput = (products, searchValue) => {
  return products.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const filterItems = (products, filter) => {
  if (filter.category !== "All") {
    products = products.filter((item) =>
      item.categories.includes(filter.category)
    );
  }

  if (
    filter.colors &&
    Array.isArray(filter.colors) &&
    filter.colors.length > 0
  ) {
    products = products.filter((item) => filter.colors.includes(item.color));
  }

  if (
    (filter.minPrice && typeof filter.minPrice === "number") ||
    (filter.maxPrice && typeof filter.maxPrice === "number")
  ) {
    products = products.filter(
      (item) => item.price >= filter.minPrice && item.price <= filter.maxPrice
    );
  }
  return products;
};

const sortItems = (products, sortValue) => {
  if (sortValue === "byPrice") {
    products.sort(function (a, b) {
      return a.price - b.price;
    });
    return products;
  }

  if (sortValue === "byName") {
    products.sort(function (a, b) {
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
    return products;
  }
};

const paginateItems = (products, currentPage) => {
  const productsTotal = products.length;

  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  products = products.slice(firstIndex, lastIndex);

  return { products: products, productsTotal, totalPages };
};

export const filterProducts = (searchValue, filter, sortValue, currentPage) => {
  let products = [...data.products];

  if (
    searchValue &&
    typeof searchValue === "string" &&
    searchValue.trim() !== ""
  ) {
    products = searchByInput(products, searchValue);
  }

  if (filter && typeof filter === "object") {
    products = filterItems(products, filter);
  }

  if (sortValue === "byPrice" || sortValue === "byName")
    products = sortItems(products, sortValue);

  return paginateItems(products, currentPage);
};
