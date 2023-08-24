import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState();
  const [lis, setList] = useState([]);

  function handlChange(event) {
    const newValue = event.target.value;
    setNewItem(newValue);
  }
  function addTolist() {
    setList((prev) => [...prev, newItem]);
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlChange} type="text" value={newItem} />
        <button onClick={addTolist}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {lis.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
