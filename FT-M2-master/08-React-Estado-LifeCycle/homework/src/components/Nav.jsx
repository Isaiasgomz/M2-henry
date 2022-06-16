import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='container'>
      <img className='img' src={Logo} alt="img" />
      <h4 className='tilte'>HENRY - Weather App</h4>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
