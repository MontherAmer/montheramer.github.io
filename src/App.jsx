import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurentLocation, getDailyForecast } from './store/actions';

import NavBar from './components/Navbar';
import Container from './components/Container';
import Loader from './components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const { curentLocation, mainWeather, showLoader } = useSelector(state => state);

  useEffect(() => {
    const loadContent = async () => {
      if (!curentLocation.latitude) await dispatch(getCurentLocation());
      dispatch(getDailyForecast(curentLocation));
    };
    loadContent();
  }, [curentLocation, dispatch]);

  return (
    <div className='App'>
      <NavBar />
      {mainWeather.length ? (
        <div className='wrapper'>
          <Container />
        </div>
      ) : null}

      {showLoader ? <Loader /> : null}
    </div>
  );
};

export default App;
