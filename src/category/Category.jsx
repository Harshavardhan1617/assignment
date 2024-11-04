import { useLocation } from "react-router-dom";
import "./Category.css";
import { useEffect, useState } from "react";
import Item from "../item/Item";

export default function Category() {
  const [listItems, setListItems] = useState([]);
  const location = useLocation();
  const categoryName = location.state;
  const fetchItems = async () => {
    const result = await fetch(
      `https://dummyjson.com/products/category/${categoryName}`
    );
    const data = await result.json();
    setListItems(data.products);
    console.log(listItems);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="category">
      <h2> {categoryName} Products</h2>
      {listItems.map((eachItem) => {
        return <Item key={eachItem.id} item={eachItem} />;
      })}
    </div>
  );
}
