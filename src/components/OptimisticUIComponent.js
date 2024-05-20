
import React, { useState } from 'react';

const OptimisticUIComponent = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [loading, setLoading] = useState(false);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems((prevItems) => [...prevItems, newItem]);
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      // Uncomment the next line to simulate an error
      // setItems((prevItems) => prevItems.slice(0, -1));
    }, 1000);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem} disabled={loading}>
        {loading ? 'Adding...' : 'Add Item'}
      </button>
    </div>
  );
};

export default OptimisticUIComponent;



