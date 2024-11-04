import { useEffect, useState } from "react";
import CategoryList from "../category-list/CategoryList";
import { Link } from "react-router-dom";

export default function Home({ data }) {
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
