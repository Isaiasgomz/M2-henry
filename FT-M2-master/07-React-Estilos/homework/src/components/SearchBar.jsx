import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  
  return (
    <div className={s.container}>
      <input type='text' placeholder='Write City'></input>
      <button Onclick={() => props.OnSearch('Searching  Your City')}>Search</button>
    </div>
  )
};