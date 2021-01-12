import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurentLocation, getDailyForecast } from './store/actions';

import FloatButtons from './components/FloatsButtons';
import Main from './components/MainWeather';

const App = () => {
  const dispatch = useDispatch();
  const { curentLocation } = useSelector(state => state);

  useEffect(() => {
    const loadContent = async () => {
      if (!curentLocation?.latitude) await dispatch(getCurentLocation());
      // dispatch(getDailyForecast(curentLocation));
    };
    loadContent();
  }, [dispatch]);

  return (
    <div className='App'>
      <FloatButtons />
      <Main />
      {/* <SideBar />
      <div className='container'>
        <CardSM />
        <CardBG />
        {showMap ? <Map /> : null}
      </div>

      {showLoader ? <Loader /> : null} */}
    </div>
  );
};

export default App;
