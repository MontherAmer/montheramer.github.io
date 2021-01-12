import React from 'react';
import { useSelector } from 'react-redux';

import MainCol from './MainCol';
import Col from './Col';

import './index.css';
export default () => {
  const data = useSelector(state => state.mainWeather);
  return (
    <div className='container'>
      {/* first column in container */}
      <div className='container-section'>
        <MainCol data={data[0]} />
      </div>
      <div className='container-section'>
        {data.slice(1, 4).map((item, i) => (
          <Col data={item} key={i} index={i} />
        ))}
      </div>
      <div className='container-section'>
        {data.slice(4, 7).map((item, i) => (
          <Col data={item} key={i} index={i + 1} />
        ))}
      </div>
    </div>
  );
};
