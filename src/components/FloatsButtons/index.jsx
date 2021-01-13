import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { showMap } from '../../store/actions';

import cityIcon from '../../assets/city-solid.svg';
import cogIcon from '../../assets/cog-solid.svg';
import mapIcon from '../../assets/map-marked-solid.svg';

import './index.css';
export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleClick = index => {
    setState({ ...state, show: state.show === index ? 0 : index });
    if (index === 2) dispatch(showMap());
  };

  return (
    <div className='floatbuttons'>
      <div className='cyrcle' onClick={() => handleClick(1)}>
        <img src={cityIcon} className='floatbuttons-image' onClick={() => handleClick(1)} />
        <div className={`bubble ${state?.show === 1 ? 'show-bubble' : ''} first-buble`}>asdasd</div>
      </div>

      <div className='cyrcle' onClick={() => handleClick(2)}>
        <img src={mapIcon} className='floatbuttons-image' onClick={() => handleClick(2)} />
      </div>

      <div className='cyrcle' onClick={() => handleClick(3)}>
        <img src={cogIcon} className='floatbuttons-image' onClick={() => handleClick(3)} />
        <div className={`bubble ${state?.show === 3 ? 'show-bubble' : ''} third-buble`}>asdasd</div>
      </div>
    </div>
  );
};
