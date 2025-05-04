import React from 'react';
import { Outlet } from 'react-router-dom';

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
        <Outlet />
    </div>
  );
};

export default DashboardLayout;
