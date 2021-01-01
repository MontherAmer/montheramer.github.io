import React, { useState } from 'react';
import menuIcon from '../../assets/menu.svg';

import './index.css';
export default () => {
  const [state, setState] = useState({});

  const toggleMenu = e => setState({ ...state, show: !state.show });

  return (
    <nav>
      <h1>Weather</h1>
      <div className='dropdown'>
        <img src={menuIcon} className='nav-icon' onClick={toggleMenu} />
        {state.show ? (
          <div className='dropdown-content' onMouseLeave={toggleMenu}>
            <p className='dropdown-item'>Home</p>
            <p className='dropdown-item'>About</p>
            <p className='dropdown-item'>Contact</p>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
