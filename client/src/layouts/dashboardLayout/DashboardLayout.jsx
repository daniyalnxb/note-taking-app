import React from 'react';
import { useLocation } from 'react-router-dom';

import './dashboard-layout.style.scss';
import Sidebar from '@/layouts/sidebar/Sidebar';
import Header from '@/layouts/header/Header';
import MainContentLayout from '@/layouts/mainContentLayout/MainContentLayout';

const DashboardLayout = () => {
  const location = useLocation();
  console.log("Page: ", location.pathname);
  
  return (
    <div className="dashboard-layout">
        <Header />
        <Sidebar />
        <MainContentLayout />
    </div>
  );
};

export default DashboardLayout;
