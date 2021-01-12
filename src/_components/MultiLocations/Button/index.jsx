import React from 'react';

import './index.css';
export default ({ onClick }) => {
  return (
    <div className='add-location' onClick={onClick}>
      <div className='add-button'>
        <span>Add</span>
      </div>
      <div className='sun'></div>
    </div>
  );
};
