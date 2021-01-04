import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from '../../Image';

import './index.css';
export default () => {
  const dispatch = useDispatch();
  const { multiLocations } = useSelector(state => state);

  console.log('multiLocations ', multiLocations);
  return (
    <div className='table'>
      {multiLocations.map(item => (
        <div className='teble-col'>
          <div className='table-header'>{item[0].city}</div>
          {item.map(subItem => (
            <div className='table-cell'>
              <p>{subItem.day}</p>
              <Image value='clear' width={45} />
              <div className='temps-container'>
                <p className='day-temp'>{subItem.dayTemp} &#8451;</p>
                <p> {subItem.nightTemp} &#8451;</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
