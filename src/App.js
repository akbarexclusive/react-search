import React, { useState } from 'react';
import SearchList from './SearchList';

const data = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' },
  { id: 4, name: 'Broccoli', category: 'Vegetable' },
  { id: 5, name: 'Strawberry', category: 'Fruit' },
  { id: 6, name: 'Spinach', category: 'Vegetable' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the list based on the search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Real-time Search Listing</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <SearchList data={filteredData} />
    </div>
  );
}

export default App;

