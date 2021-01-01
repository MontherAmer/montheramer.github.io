import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurentLocation } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const { curentLocation } = useSelector(state => state.locationState);

  useEffect(() => {
    if (!curentLocation.latitude) dispatch(getCurentLocation());
  }, []);
  return <div className='App'>aaagain</div>;
};

export default App;
