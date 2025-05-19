import React from 'react';

import './sub-menu.style.scss';
import Button from '@/components/button/Button';

const SubMenu = () => {
  return (
    <div className="sub-menu">
      <Button icon="plus" style={{width: '100%'}}>Create New Note</Button>
      <p className="hepler-text">
        All your archived notes are stored here. You can restore or delete them anytime.
      </p>
      <div className="sub-menu__items-list">
        <div className="sub-menu-item active">
          <p className="item-title">React Performance Optimization</p>
          <div className="tags-container">
            <div className="tag">Dev</div>
            <div className="tag">React</div>
          </div>
          <p className="item-time">29 Oct 2024</p>
        </div>
        <div className="sub-menu-item">
          <p className="item-title">Japan Travel Planning</p>
          <div className="tags-container">
            <div className="tag">Travel</div>
            <div className="tag">Personal</div>
          </div>
          <p className="item-time">28 Oct 2024</p>
        </div>
        <div className="sub-menu-item">
          <p className="item-title">Favorite Pasta Recipes</p>
          <div className="tags-container">
            <div className="tag">Cooking</div>
            <div className="tag">Recipe</div>
          </div>
          <p className="item-time">27 Oct 2024</p>
        </div>
        <div className="sub-menu-item">
          <p className="item-title">Weekly Workout Plan</p>
          <div className="tags-container">
            <div className="tag">Fitness</div>
            <div className="tag">Personal</div>
          </div>
          <p className="item-time">25 Oct 2024</p>
        </div>
        <div className="sub-menu-item">
          <p className="item-title">Meal Prep Ideas</p>
          <div className="tags-container">
            <div className="tag">Cooking</div>
            <div className="tag">Health</div>
            <div className="tag">Recipies</div>
          </div>
          <p className="item-time">23 Oct 2024</p>
        </div>
        <div className="sub-menu-item">
          <p className="item-title">Reading List</p>
          <div className="tags-container">
            <div className="tag">Personal</div>
            <div className="tag">Dev</div>
          </div>
          <p className="item-time">15 Oct 2024</p>
        </div>
        <div className="sub-menu-item">
          <p className="item-title">Fitness Goals 2025</p>
          <div className="tags-container">
            <div className="tag">Fitness</div>
            <div className="tag">Health</div>
            <div className="tag">Personal</div>
          </div>
          <p className="item-time">10 Oct 2024</p>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
