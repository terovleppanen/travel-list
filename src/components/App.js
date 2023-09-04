import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        // When we have right item(item.id match id) create new object
        // which has updated packed value. Otherwise return same item.
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("You sure you know what you are doing?");

    // remove all items in packings list
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      {/* naming convention handleAddItems -> onAddItems  */}
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        items={items}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
