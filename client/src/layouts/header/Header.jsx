import React, { useContext } from 'react';

import './header.style.scss';

import { ThemeContext } from '@/context/ThemeProvider';
import SearchBar from '@/components/searchBar/SearchBar';

import SettingsIcon from '@/assets/icons/setting.svg';

import Logo from '@/assets/logo.svg';
import LogoDark from '@/assets/logo-dark.svg';

const Header = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  
  return (
    <header className="header">
      <h1 className="header__title">All Notes</h1>
      <div className="header__search-bar">
        <div className="search">
          <SearchBar />
        </div>
        <SettingsIcon className="settings-icon" />
      </div>
      <div className="logo-container">
          {darkTheme ? <LogoDark className="logo" onClick={toggleDarkTheme} /> : <Logo className="logo" onClick={toggleDarkTheme} />}
      </div>
    </header>
  );
};

export default Header;
