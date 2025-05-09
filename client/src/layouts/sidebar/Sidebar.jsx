import React, { useContext } from 'react';

import './sidebar.style.scss';

import { ThemeContext } from '@/context/ThemeProvider';
import SidebarItem from '../../components/sidebarItem/SidebarItem';

import Logo from '@/assets/logo.svg';
import LogoDark from '@/assets/logo-dark.svg';
import Button from '../../components/button/Button';

const Sidebar = () => {
    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

    return (
      <aside className="sidebar">
        <div className="logo-container">
          {darkTheme ? <LogoDark className="logo" onClick={toggleDarkTheme} /> : <Logo className="logo" onClick={toggleDarkTheme} />}
        </div>
        <nav className="navigation">
          <div className="primary-navigation">
            <SidebarItem title="All notes" icon="home" />
            <SidebarItem title="Archived Notes" icon="archive" />
          </div>
          <div className="tags-navigation-conatainer">
            <p className="tags-title">Tags</p>
            <div className="tags-navigation">
              <SidebarItem title="Cooking" icon="tag" />
              <Button>Hello</Button>
            </div>
          </div>
        </nav>
      </aside>
    );
};

export default Sidebar;
