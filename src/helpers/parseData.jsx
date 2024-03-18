import data from "../products.json";

export const parseData = () => {
  const filteredCategories = data.products
    .flatMap((item) => item.categories)
    .filter((item, id, array) => array.indexOf(item) === id);

  const colors = data.products
    .map((item) => item.color)
    .filter((item, id, array) => array.indexOf(item) === id);

  const minPrice = Math.min(...data.products.map((item) => item.price));
  const maxPrice = Math.max(...data.products.map((item) => item.price));

  const prices = {
    minPrice,
    maxPrice
  }

  return {
    filteredCategories,
    colors,
    prices
  };
};
