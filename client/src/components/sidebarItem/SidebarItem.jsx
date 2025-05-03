import React from 'react';

import './sidebar-item.style.scss';

import HomeIcon from '@/assets/icons/home.svg';
import ArchiveIcon from '@/assets/icons/archive.svg';
import TagIcon from '@/assets/icons/tag.svg';
import ChevronIcon from '@/assets/icons/chevron-right-md.svg';

const SidebarItem = ({ title='Your title', icon='tag' }) => {
    const renderIcon = () => {
        switch(icon) {
            case 'home':
                return <HomeIcon className="sidebar-item-icon home" />;
            case 'archive':
                return <ArchiveIcon className="sidebar-item-icon" />;
            case 'tag':
                return <TagIcon className="sidebar-item-icon" />;
        }
    };
  return (
    <div className="sidebar-item active">
        {renderIcon()}
        <p className="sidebar-item-name text-preset-4">{title}</p>
        <ChevronIcon className="chavron-icon" />
    </div>
  );
};

export default SidebarItem;
