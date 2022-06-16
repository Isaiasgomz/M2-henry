import React, { useState } from "react";


export default function SearchBar({onSearch}) {

  const [value, setValue] = useState('')
  
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(value);
      setValue('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={event => setValue(event.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
