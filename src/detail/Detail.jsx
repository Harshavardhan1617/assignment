import { useLocation, useParams } from "react-router-dom";
import "./Detail.css";

export default function Detail() {
  const location = useLocation();
  const itemData = location.state;
  return (
    <div className="detail">
      {itemData.title}
      {itemData.id}
      {itemData.description}
    </div>
  );
}
