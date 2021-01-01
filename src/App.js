import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurentLocation, getDailyForecast } from './store/actions';

import NavBar from './components/Navbar';

const App = () => {
  const dispatch = useDispatch();
  const { curentLocation } = useSelector(state => state.locationState);

  useEffect(async () => {
    if (!curentLocation.latitude) await dispatch(getCurentLocation());
    dispatch(getDailyForecast(curentLocation));
  }, [curentLocation]);
  return (
    <div className='App'>
      <NavBar />
    </div>
  );
};

export default App;
