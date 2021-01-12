import React, { useState } from 'react';

import menuIcon from '../../assets/menu.svg';

import Modal from '../Modal';
import OneLocation from '../OneLocation';
import MultiLocation from '../MultiLocations';
import Image from '../Image';

import './index.css';
export default () => {
  const [state, setState] = useState({});

  const toggleMenu = () => setState({ ...state, showMenu: !state.showMenu });

  const toggleOneLocation = () => setState({ ...state, showMultiLocation: false, showOneLocation: !state.showOneLocation });

  const toggleMultiLocation = () => setState({ ...state, showOneLocation: false, showMultiLocation: !state.showMultiLocation });

  return (
    <nav>
      <h1>Weather</h1>
      <div className='dropdown'>
        <img src={menuIcon} className='nav-icon' onClick={toggleMenu} />
        {state.showMenu ? (
          <div className='dropdown-content' onMouseLeave={toggleMenu}>
            <div className='dropdown-item' onClick={toggleOneLocation}>
              <Image classess='item-image' value='loc' width={20} />
              <p>One Location</p>
            </div>
            <div className='dropdown-item' onClick={toggleMultiLocation}>
              <Image classess='item-image' value='compare' width={20} />
              <p> Compare locations</p>
            </div>
          </div>
        ) : null}
      </div>
      {state.showOneLocation ? (
        <Modal show={state.showOneLocation} hide={toggleOneLocation}>
          <OneLocation hideModal={toggleOneLocation} />
        </Modal>
      ) : null}

      {state.showMultiLocation ? (
        <Modal show={state.showMultiLocation} hide={toggleMultiLocation}>
          <MultiLocation hideModal={toggleMultiLocation} />
        </Modal>
      ) : null}
    </nav>
  );
};
