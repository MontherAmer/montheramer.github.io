import React, { useState } from 'react';

import { searchCountries, listCities } from 'cclist';
import styles from './index.module.css';
import gStyels from '../index.module.css';
import cityIcon from '../../../assets/city-solid.svg';

export default ({ handleClick, themes, show, handleNewPlace }) => {
  const [state, setState] = useState({});

  const handleCountryChange = e => {
    let countires = searchCountries(e.target.value, 'code name');
    let countryList = countires.splice(0, 4);
    setState({ ...state, countryList, showCities: false, countryName: e.target.value, showCountry: countryList.length ? true : false });
  };

  const handleCountryClick = e => {
    let allCities = listCities(e.code);
    console.log(allCities);
    setState({
      ...state,
      showCountry: false,
      allCities,
      citiesList: allCities,
      countryName: e.name,
      countryCode: e.code,
      showCities: allCities.length ? true : false
    });
  };

  const handleCityChange = e => {
    console.log('allCities ', state.allCities);
    let citiesList = [];
    state.allCities.map(item => {
      let t = new RegExp(`${e.target.value.toLowerCase()}`).test(item.toLowerCase());
      if (t) citiesList.push(item);
    });
    setState({ ...state, citiesList, cityName: e.target.value });
  };

  const handleCityClick = e => {
    setState({ ...state, cityName: e, citiesList: [] });
    handleNewPlace(`${e},${state.countryCode}`);
  };

  return (
    <div className={`${gStyels.cyrcle} ${themes[0] ? gStyels.night : ''}`} onClick={() => handleClick(1)}>
      <img src={cityIcon} className={gStyels.floatbuttonsImage} onClick={() => handleClick(1)} />
      <div className={`${gStyels.bubble} ${themes[0] ? gStyels.night : ''} ${show === 1 ? gStyels.showBubble : ''}  ${gStyels.firstBuble}`}>
        <div className={styles.autocomplete}>
          <input type='text' value={state?.countryName || ''} placeholder='Enter Country' onChange={handleCountryChange} />
          {state?.countryList?.length && state.showCountry ? (
            <div className={styles.list}>
              {state.countryList.map(item => (
                <div className={styles.list_item} key={item.code} onClick={() => handleCountryClick(item)}>
                  {item.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Cities */}
        {state.showCities ? (
          <div className={styles.autocomplete}>
            <input type='text' value={state?.cityName || ''} placeholder='Choose City' onChange={handleCityChange} />
            {state?.citiesList?.length && state.showCities ? (
              <div className={styles.list}>
                {state.citiesList.map((item, i) => (
                  <div className={styles.list_item} key={i} onClick={() => handleCityClick(item)}>
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
