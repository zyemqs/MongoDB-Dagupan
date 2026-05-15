import React, { useState } from "react";
import "./App.css";

function App() {

  // STEP 2: INITIAL DATA + STATE
  const [items, setItems] = useState([
    "Learn React",
    "Practice useState",
    "Build Dynamic Lists"
  ]);

  const [newItem, setNewItem] = useState("");

  // STEP 4.1: ADD ITEM
  const addItem = () => {

    // STEP 5.2: VALIDATION
    if (newItem.trim() === "") {
      alert("Please enter a valid item.");
      return;
    }

    setItems([...items, newItem]);
    setNewItem("");
  };

  // STEP 4.2: REMOVE ITEM
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container">

      <h1>Dynamic List Rendering</h1>

      {/* INPUT SECTION */}
      <div className="input-section">

        <input
          type="text"
          placeholder="Enter new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button onClick={addItem}>
          Add Item
        </button>

      </div>

      {/* STEP 5.1: EMPTY LIST MESSAGE */}
      {items.length === 0 ? (
        <p className="empty-message">
          No items available.
        </p>
      ) : (

        // STEP 3: MAP RENDERING
        <ul>

          {items.map((item, index) => (
            <li key={index}>

              {item}

              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>

            </li>
          ))}

        </ul>
      )}

    </div>
  );
}

export default App;