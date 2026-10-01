import styles from "./ItemList.module.css";
function ItemList({ items, selectedId, onSelect, title = "Prayer List" }) {
  return (
    <div className="prayer-list prayer-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={
              item.id === selectedId ? "prayer-list-active-prayer" : undefined
            }
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
