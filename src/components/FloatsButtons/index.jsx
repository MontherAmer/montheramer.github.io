import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showMap, updateUnit, getExistingForecastData, updateOnlyOneLocation } from '../../store/actions';

import mapIcon from '../../assets/map-marked-solid.svg';

import Units from './Units';

import styles from './index.module.css';
export default () => {
  const dispatch = useDispatch();
  const { unit, onlyOneLocation, coords } = useSelector(state => state.mainState);
  const [state, setState] = useState({});

  const handleUnits = e => {
    if (e !== unit) dispatch(updateUnit(e));
  };

  const handleClick = index => {
    setState({ ...state, show: index });
    if (index === 2) dispatch(showMap());
  };

  const handleOnlyOneLocation = e => {
    dispatch(updateOnlyOneLocation());
  };
  return (
    <div className={styles.floatbuttons}>
      <div className={styles.cyrcle} onClick={() => handleClick(2)}>
        <img src={mapIcon} className={styles.floatbuttonsImage} onClick={() => handleClick(2)} />
      </div>

      <Units
        handleClick={handleClick}
        handleUnits={handleUnits}
        handleOnlyOneLocation={handleOnlyOneLocation}
        unit={unit}
        onlyOneLocation={onlyOneLocation}
        show={state.show}
      />
    </div>
  );
};
