import React, { useEffect, useState } from 'react';
import Image from '../Image';

import './index.css';
export default ({ show, hide, children }) => {
  const [state, setstate] = useState({});
  return (
    <div id='modal' className={`modal ${show ? 'show' : ''}`}>
      <Image width={30} value='close' classess='modal-close' onClick={hide} />
      <div className='modal-body'>{children}</div>
    </div>
  );
};
