import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeItemMultiForecast } from '../../../store/actions';
import Image from '../../Image';

import './index.css';
export default () => {
  const dispatch = useDispatch();
  const { multiLocations } = useSelector(state => state);

  const removeColumn = i => dispatch(removeItemMultiForecast(i));

  return (
    <div className='table'>
      {multiLocations.length > 1 &&
        multiLocations.map((item, i) => (
          <div className='teble-col' key={i}>
            <div className='table-header'>
              {item[0].city}
              {i !== 0 ? <Image value='close' width={22} classess='column-remove' onClick={() => removeColumn(i)} /> : null}
            </div>
            {item.map((subItem, i) => (
              <div className='table-cell' key={i}>
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
      {multiLocations.length === 1 ? <h2>Add new Location to compare</h2> : null}
    </div>
  );
};
