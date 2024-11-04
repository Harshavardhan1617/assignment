import { useLocation, useParams } from "react-router-dom";
import "./Category.css";
import { useEffect, useState } from "react";
import Item from "../item/Item";

export default function Category() {
  const [listItems, setListItems] = useState([]);
  const { category } = useParams();
  const fetchItems = async () => {
    const result = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await result.json();
    setListItems(data.products);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="category">
      <h2> {category} Products</h2>
      {listItems.map((eachItem) => {
        return <Item key={eachItem.id} item={eachItem} />;
      })}
    </div>
  );
}
