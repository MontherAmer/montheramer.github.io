import React from 'react';

import Image from '../../Image';
import './index.css';
export default ({ data, index }) => {
  return (
    <div className='column'>
      <div className='column-header' style={[0, 2, 4].includes(index) ? { backgroundColor: '#232430' } : {}}>
        {data.day}
      </div>
      <div className='column-body small' style={[0, 2, 4].includes(index) ? { backgroundColor: '#272835' } : {}}>
        <Image width={48} value={data.icon} />
        <div className='temps-container'>
          <p className='day-temp'> {data.dayTemp}&#8451;</p>
          <p> {data.nightTemp}&#8451;</p>
        </div>
      </div>
    </div>
  );
};
