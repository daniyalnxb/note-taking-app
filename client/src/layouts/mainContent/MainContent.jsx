import React from 'react';

import './main-content.style.scss';

import CreateNote from '@/components/createNote/CreateNote';

const MainContent = () => {
  return (
    <div className="main-content">
      <CreateNote />
    </div>
  );
};

export default MainContent;
