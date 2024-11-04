import { useEffect, useState } from "react";
import Categories from "../categories/Categories";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <div className="header">#Home</div>
      {data.map((category) => (
        <Categories key={crypto.randomUUID()} name={category} />
      ))}
    </div>
  );
}
