import React from 'react';

import './index.css';
export default () => {
  return (
    <div className='container'>
      {/* first column in container */}
      <div className='col-1nd'>
        <div className='container-item'>
          <div className='container-item-header'>
            <p>hello</p>
            <p>hello</p>
          </div>
          <div className='container-item-body'>body</div>
        </div>
      </div>
      <div className='col-2nd'>
        {data1.map(item => (
          <div className='container-item'>
            <div className='container-item-header'>header</div>
            <div className='container-item-body'>body</div>
          </div>
        ))}
      </div>
      <div className='col-3nd'>
        {data2.map(d => (
          <div className='container-item'>
            <div className='container-item-header'>header</div>
            <div className='container-item-body'>body</div>
          </div>
        ))}
      </div>
    </div>
  );
};
