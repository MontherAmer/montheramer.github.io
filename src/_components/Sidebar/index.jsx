import React, { useState } from 'react';
import downIcon from '../../assets/down.svg';
import AutoComplete from '../AutoComplete';

import './index.css';
const SideBar = () => {
  const [state, setState] = useState({});
  const test = e => {
    state.show == e.target.attributes.name.nodeValue
      ? setState({ ...state, show: 0 })
      : setState({ ...state, show: e.target.attributes.name.nodeValue });
  };

  return (
    <div className='sidebar'>
      <div>
        <div className='dropdown-header center'>Open Map</div>
        {/* just for equal space */}
        <div className={`dropdown-menu`}></div>
        {/* choose city drop down list */}
        <div className='dropdown-header' name='menu-1' onClick={test}>
          Choose City
          <img src={downIcon} name='menu-1' />
        </div>
        <div className={`dropdown-menu ${state?.show == 'menu-1' ? 'show' : ''}`}>
          <AutoComplete />
        </div>
        <div className='dropdown-header' name='menu-2' onClick={test}>
          Setting
          <img src={downIcon} name='menu-2' />
        </div>
        <div className={`dropdown-menu ${state?.show == 'menu-2' ? 'show' : ''}`}>
          <AutoComplete />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
