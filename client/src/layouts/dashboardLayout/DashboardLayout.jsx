import React from 'react';

import './dashboard-layout.style.scss';
import Sidebar from '@/layouts/sidebar/Sidebar';
import Header from '@/layouts/header/Header';
import SubMenu from '@/layouts/submenu/SubMenu';
import MainContent from '@/layouts/maincontent/MainContent';
import OptionsBar from '@/layouts/optionsbar/OptionsBar';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
        <Header />
        <Sidebar />
        <SubMenu />
        <MainContent />
        <OptionsBar />
    </div>
  );
};

export default DashboardLayout;
