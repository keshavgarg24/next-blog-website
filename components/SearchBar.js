import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Search posts...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='border border-gray-300 p-2 w-full'
      />
    </div>
  );
}
