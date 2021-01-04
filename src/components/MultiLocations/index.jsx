import React from 'react';

import './index.css';
export default ({ hideModal }) => {
  return (
    <div className='multiple-locations'>
      <div></div>
      <div className='add-location'>
        <div className='add-button'>
          <span>Add</span>
        </div>
        <div className='sun'></div>
      </div>
    </div>
  );
};
