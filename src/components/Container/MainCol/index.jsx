import React from 'react';

import Image from '../../Image';
import './index.css';
export default ({ data }) => {
  return (
    <div className='column-first'>
      {/* HEADER */}
      <div className='column-header'>
        <p>{data?.day}</p>
        <p>{data?.date}</p>
      </div>
      <div className='column-body'>
        <p className='city-name'>{data?.city}</p>
        <div className='column-main-body'>
          <div className='temps-container'>
            <p className='main-day-temp'> {data?.dayTemp}&#8451; </p>
            <p className='night-temp'>{data?.nightTemp}&#8451;</p>
          </div>
          &nbsp; &nbsp; &nbsp;
          <Image width={90} value={data?.icon} />
        </div>

        {/* FOOTER */}
        <div className='column-footer'>
          <div className='column-footer-item'>
            <Image value='wind' width={21} /> &nbsp;
            <p className='m-0'> {data?.speed} </p>
          </div>

          <div className='column-footer-item'>
            <Image value='sunrise' width={21} /> &nbsp;
            <p className='m-0'> {data?.sunRise} </p>
          </div>

          <div className='column-footer-item'>
            <Image value='sunset' width={21} /> &nbsp;
            <p className='m-0'> {data?.sunSet} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
