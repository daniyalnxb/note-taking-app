import React from 'react';

import MainContent from '@/components/mainContent/MainContent';
import SubMenu from '@/components/submenu/SubMenu';
import OptionsBar from '@/components/optionsbar/OptionsBar';

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
