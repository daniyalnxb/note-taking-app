import React from 'react';

import './options-bar.style.scss';

import Button from '@/components/button/Button';

const OptionsBar = () => {
  return (
    <div className="options-bar">
      <Button type="bordered" icon="archive" style={{width: '100%', justifyContent: 'flex-start'}}>Archive Note</Button>
      <Button type="bordered" icon="delete" style={{width: '100%', justifyContent: 'flex-start'}}>Delete Note</Button>
    </div>
  );
};

export default OptionsBar;
