import "./Item.css";

export default function Item({ item }) {
  console.log(item);
  return <div className="item">{item.title}</div>;
}
