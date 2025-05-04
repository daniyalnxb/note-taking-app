import React from 'react';
import { useLocation } from 'react-router-dom';

import './header.style.scss';

const Header = () => {
  const location = useLocation();
  console.log("location: ", location?.pathname?.split('/'));
  
  return (
    <header className="header">Header</header>
  );
};

export default Header;
