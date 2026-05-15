import { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
  // State for items
  const [items, setItems] = useState([]);

  // State for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Fetch items when page loads
  useEffect(() => {
    fetchItems();
  }, []);

  // Function to get all items
  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/items');

      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to add item
  const addItem = async () => {
    // Prevent empty input
    if (!name.trim()) {
      alert('Please enter item name');
      return;
    }

    try {
      await axios.post('http://localhost:8000/items/add', {
        name,
        description
      });

      // Clear inputs
      setName('');
      setDescription('');

      // Refresh items
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  // Function to delete item
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/items/delete/${id}`);

      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addItem}>Add Item</button>
      </div>

      <div className="items-container">
        {items.length === 0 ? (
          <p>No items available</p>
        ) : (
          items.map((item) => (
            <div className="item-card" key={item._id}>
              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <button onClick={() => deleteItem(item._id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ItemList;