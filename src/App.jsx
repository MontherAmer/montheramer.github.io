import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurentLocation, getDailyForecast } from './store/actions';

import NavBar from './components/Navbar';
import Container from './components/Container';

const App = () => {
  const dispatch = useDispatch();
  const { curentLocation } = useSelector(state => state);
  useEffect(async () => {
    if (!curentLocation.latitude) await dispatch(getCurentLocation());
    dispatch(getDailyForecast(curentLocation));
  }, [curentLocation]);
  return (
    <div className='App'>
      <NavBar />
      <div className='wrapper'>
        <Container />
      </div>
    </div>
  );
};

export default App;
