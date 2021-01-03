import React, { useState } from 'react';

import menuIcon from '../../assets/menu.svg';

import Modal from '../Modal';
import Map from '../Map';

import './index.css';
export default () => {
  const [state, setState] = useState({});

  const toggleMenu = e => setState({ ...state, showMenu: !state.showMenu });

  const toggleModal = e => setState({ ...state, showModal: !state.showModal });

  const handlePosition = latLng => console.log('EEEEEEEE ', latLng);

  return (
    <nav>
      <h1>Weather</h1>
      <div className='dropdown'>
        <img src={menuIcon} className='nav-icon' onClick={toggleMenu} />
        {state.showMenu ? (
          <div className='dropdown-content' onMouseLeave={toggleMenu}>
            <p className='dropdown-item' onClick={toggleModal}>
              Home
            </p>
            <p className='dropdown-item'>About</p>
            <p className='dropdown-item'>Contact</p>
          </div>
        ) : null}
      </div>
      {state.showModal ? (
        <Modal show={state.showModal} hide={toggleModal}>
          <Map handlePosition={handlePosition} />
        </Modal>
      ) : null}
    </nav>
  );
};
