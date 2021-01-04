import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getMultiForecast } from '../../store/actions';

import Button from './Button';
import Table from './Table';
import Map from '../Map';

import './index.css';
export default ({ hideModal }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const toggleMap = () => setState({ ...state, showMap: !state.showMap });

  const handleMapClicked = async latLng => {
    await dispatch(getMultiForecast({ latitude: latLng[0], longitude: latLng[1] }));
    toggleMap();
  };

  return (
    <div className='multiple-locations'>
      {state.showMap ? <Map handlePosition={handleMapClicked} /> : <Table />}
      <Button onClick={toggleMap} />
    </div>
  );
};
