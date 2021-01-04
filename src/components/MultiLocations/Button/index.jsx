import React from 'react';

import './index.css';
export default ({ handleClick }) => {
  return (
    <div className='add-location' onClick={handleClick}>
      <div className='add-button'>
        <span>Add</span>
      </div>
      <div className='sun'></div>
    </div>
  );
};
