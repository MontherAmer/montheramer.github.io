import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDefaltLocation, getForecastData } from './store/actions';

import FloatButtons from './components/FloatsButtons';
import Loader from './components/Loader';
import Main from './components/MainWeather';
import Modal from './components/Modal';

const App = () => {
  const dispatch = useDispatch();
  const { weathers } = useSelector(state => state.mainState);
  const { unit, isMapShown } = useSelector(state => state.utilsState);

  useEffect(() => {
    const loadContent = async () => {
      let location = await getDefaltLocation();
      console.log('location', location);
      dispatch(getForecastData({ unit, ...location }));
    };
    loadContent();
  }, [dispatch]);

  if (!weathers?.length) return <Loader />;

  return (
    <div className='App'>
      <FloatButtons />
      {weathers?.length === 1 ? <Main /> : <h1>should render another items</h1>}

      {isMapShown ? <Modal show={isMapShown} /> : null}
    </div>
  );
};

export default App;
