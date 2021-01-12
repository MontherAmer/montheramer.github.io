import React, { useState } from 'react';
import { countires } from '../../assets/data/countries';

import './index.css';
const AutoComplete = () => {
  const [state, setState] = useState({ list: [] });

  const handleChange = e => {
    let count = 0;
    let list = countires.filter(country => {
      if (country.name.toLowerCase().includes(e.target.value.toLowerCase()) && count < 5) {
        count++;
        return country;
      } else {
        return false;
      }
    });
    setState({ ...state, list, name: e.target.value, show: list.length ? true : false });
  };

  const handleClick = e => (setState({ ...state, name: e.name, show: false }), console.log(e.code));

  return (
    <div className='autocomplete'>
      <input type='text' value={state?.name || ''} placeholder='Enter Country' onChange={handleChange} />
      {state.list.length && state.show ? (
        <div className='list'>
          {state.list.map(item => (
            <div className='list-item' key={item.code} onClick={() => handleClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AutoComplete;
