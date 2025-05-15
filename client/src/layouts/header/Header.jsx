import React from 'react';

import './header.style.scss';

import SearchBar from '@/components/searchBar/SearchBar';

import SettingsIcon from '@/assets/icons/setting.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">All Notes</h1>
      <div className="header__search-bar">
        <div className="search">
          <SearchBar />
        </div>
        <SettingsIcon className="settings-icon" />
      </div>
    </header>
  );
};

export default Header;
