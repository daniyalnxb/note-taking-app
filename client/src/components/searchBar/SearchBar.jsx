import React from 'react';

import './search-bar.style.scss';

import SerchIcon from '@/assets/icons/search.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
        <SerchIcon />
        <div className="input-container">
          <input type="text" className="input" name="search" placeholder="Search by title, content, or tags…" />
        </div>
    </div>
  );
};

export default SearchBar;
