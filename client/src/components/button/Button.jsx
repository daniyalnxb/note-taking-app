import React from 'react';

import './button.style.scss';

import RefreshIcon from '@/assets/icons/refresh-left.svg';
import GoogleLogo from '@/assets/icons/google.svg';

const  Button = ({ children, type='primary', disable, onClick=() => {}, icon="", ...rest }) => {
  
  const onButtonClick = () => {
    if(disable) return;
    onClick();
  }

  const getLogo = () => {
    switch(icon) {
      case 'google':
        return <GoogleLogo />
    }
  }

  return (
    <button
      onClick={onButtonClick}
      className={`button ${type} ${disable ? 'disabled' : ''}`}
      {...rest}
    >
      {icon &&
        getLogo()
      }
      {children}
    </button>
  );
};

export default  Button;
