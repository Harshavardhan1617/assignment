import { useState, useEffect } from "react";
import "./App.css";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Category from "./category/Category";
import Detail from "./detail/Detail";

function App() {
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
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:itemID" element={<Detail />} />
    </Routes>
  );
}
export default App;
