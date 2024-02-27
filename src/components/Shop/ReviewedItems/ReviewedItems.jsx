import "./style.css";
import { useState, useEffect } from "react";
import data from "../../../products.json";
import Card from "./components/Card/Card";

function ReviewedItems() {
  const [reviewedItems, setReviewedItems] = useState([]);

  useEffect(() => {
    const listOfItems = [...data.products];
    const randomItems = [];

    while (randomItems.length < 3) {
      const randomIndex = Math.floor(Math.random() * listOfItems.length);
      const randomElement = listOfItems[randomIndex];
      if (!randomItems.includes(randomElement)) {
        randomItems.push(randomElement);
      }
    }
    setReviewedItems(randomItems);
  }, []);

  return (
    <div className="sidebar_reviewed_by_you">
      <h4 className="sidebar_section_title">Reviewed by you</h4>
      <div className="sidebar_reviewed_by_you_items">
        {reviewedItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ReviewedItems;
