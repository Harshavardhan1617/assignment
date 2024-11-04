import { useState } from "react";
import "./App.css";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Category from "./category/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
}
export default App;
