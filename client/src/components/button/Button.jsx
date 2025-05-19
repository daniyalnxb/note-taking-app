import React from 'react';

import './button.style.scss';

import RefreshIcon from '@/assets/icons/refresh-left.svg';
import GoogleLogo from '@/assets/icons/google.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import ArchiveIcon from '@/assets/icons/archive.svg';
import DeleteIcon from '@/assets/icons/delete.svg';

const  Button = ({ children, type='primary', disable, onClick=() => {}, icon="", ...rest }) => {
  
  const onButtonClick = () => {
    if(disable) return;
    onClick();
  }

  const getLogo = () => {
    switch(icon) {
      case 'google':
        return <GoogleLogo />;
      case 'plus':
        return <PlusIcon />;
      case 'refresh':
        return <RefreshIcon />;
      case 'archive':
        return <ArchiveIcon />;
      case 'delete':
        return <DeleteIcon />;
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
