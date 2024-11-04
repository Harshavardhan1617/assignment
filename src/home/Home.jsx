import { useEffect, useState } from "react";
import CategoryList from "../category-list/CategoryList";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <div className="header">#Home</div>
      {data.map((category) => (
        <Link key={crypto.randomUUID()} to={`/${category}`} state={category}>
          <CategoryList name={category} />
        </Link>
      ))}
    </div>
  );
}
