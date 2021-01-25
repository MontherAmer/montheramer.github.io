import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showMap, updateUnit, getForecastData, updateOnlyOneLocation } from '../../store/actions';

import mapIcon from '../../assets/map-marked-solid.svg';

import Units from './Units';
import Countries from './Country';

import styles from './index.module.css';
export default () => {
  const dispatch = useDispatch();
  const { unit, onlyOneLocation, themes } = useSelector(state => state.mainState);
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
  const handleNewPlace = data => {
    console.log('handleNewPlace ', data);
    dispatch(getForecastData({ unit, name: data }));
  };

  return (
    <div className={styles.floatbuttons}>
      <Countries handleClick={handleClick} show={state.show} themes={themes} handleNewPlace={handleNewPlace} />

      <div className={`${styles.cyrcle} ${themes[0] ? styles.night : ''}`} onClick={() => handleClick(2)}>
        <img src={mapIcon} className={styles.floatbuttonsImage} onClick={() => handleClick(2)} />
      </div>

      <Units
        handleClick={handleClick}
        handleUnits={handleUnits}
        handleOnlyOneLocation={handleOnlyOneLocation}
        unit={unit}
        onlyOneLocation={onlyOneLocation}
        show={state.show}
        themes={themes}
      />
    </div>
  );
};
