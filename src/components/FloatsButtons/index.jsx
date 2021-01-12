import React, { useState } from 'react';

import cityIcon from '../../assets/city-solid.svg';
import cogIcon from '../../assets/cog-solid.svg';
import mapIcon from '../../assets/map-marked-solid.svg';

import './index.css';
export default () => {
  const [state, setState] = useState({});

  const test = index => {
    setState({ ...state, show: state.show === index ? 0 : index });
  };
  return (
    <div className='floatbuttons'>
      <div className='cyrcle' onClick={() => test(1)}>
        <img src={cityIcon} className='floatbuttons-image' onClick={() => test(1)} />
        <div className={`bubble ${state?.show === 1 ? 'show-bubble' : ''} first-buble`}>asdasd</div>
      </div>

      <div className='cyrcle' onClick={() => test(2)}>
        <img src={mapIcon} className='floatbuttons-image' onClick={() => test(2)} />
        <div className={`bubble ${state?.show === 2 ? 'show-bubble' : ''} second-buble`}>second</div>
      </div>

      <div className='cyrcle' onClick={() => test(3)}>
        <img src={cogIcon} className='floatbuttons-image' onClick={() => test(3)} />
        <div className={`bubble ${state?.show === 3 ? 'show-bubble' : ''} third-buble`}>asdasd</div>
      </div>
    </div>
  );
};
