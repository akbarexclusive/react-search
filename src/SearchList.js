import React from 'react';

function SearchList({ data }) {
  if (data.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {data.map(item => (
        <li key={item.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <strong>{item.name}</strong> - {item.category}
        </li>
      ))}
    </ul>
  );
}

export default SearchList;

