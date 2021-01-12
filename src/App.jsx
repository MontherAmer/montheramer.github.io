import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDefaltLocation, getForecastData } from './store/actions';

import FloatButtons from './components/FloatsButtons';
import Loader from './components/Loader';
import Main from './components/MainWeather';

const App = () => {
  const dispatch = useDispatch();
  const { weathers } = useSelector(state => state.mainState);
  const { unit } = useSelector(state => state.utilsState);

  useEffect(() => {
    const loadContent = async () => {
      let location = await getDefaltLocation();
      console.log('location', location);
      dispatch(getForecastData({ unit, ...location }));
      // if (!curentLocation?.latitude) await dispatch(getDefaltLocation());
      // dispatch(getDailyForecast(curentLocation));
    };
    loadContent();
  }, [dispatch]);

  if (!weathers?.length) return <Loader />;

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
