import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, addItem, updateItem, deleteItem } from "./actions";

function ItemList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  // Simuler fetch API
  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await res.json();
      dispatch(setItems(data));
    };
    fetchItems();
  }, [dispatch]);

  return (
    <div>
      <h1>Items</h1>
      <button onClick={() => dispatch(addItem({ id: 99, title: "New Item" }))}>Add</button>
      {items.map(item => (
        <div key={item.id}>
          {item.title}
          <button onClick={() => dispatch(updateItem({ ...item, title: "Updated" }))}>Update</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default ItemList;
