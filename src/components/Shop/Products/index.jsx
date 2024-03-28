import { Card } from "../Card/Card";

export const Products = ({ products, ...props }) => (
  <div className="products_wrap">
    {products.map((item) => (
      <Card key={item.id} item={item} />
    ))}
  </div>
);
