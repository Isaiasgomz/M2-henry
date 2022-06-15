import React from 'react';


export default function SearchBar(props) {
  // acá va tu código
  
  return (
    <div>
      <input type='text' placeholder='Write City'></input>
      <button Onclick={() => props.OnSearch('Searching  Your City')}>Search</button>
    </div>
  )
};