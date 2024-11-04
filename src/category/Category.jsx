import { useLocation } from "react-router-dom";
import "./Category.css";

export default function Category() {
  const location = useLocation();
  return (
    <div className="category">
      <h2> {location.state} Products</h2>
    </div>
  );
}
