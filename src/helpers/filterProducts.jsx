import data from "../products.json";

function filterProducts(debouncedValue, filter, sortValue) {
  let products = [...data.products];

  if (debouncedValue) {
    products = products.filter((item) =>
      item.name.toLowerCase().includes(debouncedValue.toLowerCase())
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

  if (filter.minPrice && filter.maxPrice) {
    products = products.filter(
      (item) => item.price >= filter.minPrice && item.price <= filter.maxPrice
    );
  }
    
  if (filter.minPrice) {
    products = products.filter(
      (item) => item.price >= filter.minPrice
    );
  }
    
  if (filter.maxPrice) {
    products = products.filter(
    (item) => item.price <= filter.maxPrice
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

  return products;
}

export default filterProducts;
