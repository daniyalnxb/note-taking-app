import React from 'react';

import MainContent from '@/layouts/mainContent/MainContent';
import SubMenu from '@/layouts/submenu/SubMenu';
import OptionsBar from '@/layouts/optionsbar/OptionsBar';

const MainContentLayout = () => {
  return (
    <>
        <SubMenu />
        <MainContent />
        <OptionsBar />
    </>
  );
};

export default MainContentLayout;
