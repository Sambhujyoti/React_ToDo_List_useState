import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [handleItem, setHandleItem] = useState([]);

  function addItem(event) {
    return setItem(event.target.value);
  }

  function handlingClick() {
    setHandleItem((prevItems) => [...prevItems, item]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={addItem} />
        <button onClick={handlingClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {handleItem.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
