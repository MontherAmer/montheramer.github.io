import React from 'react';
import { useDispatch } from 'react-redux';
import Map from '../Map';

import { getDailyForecast, toggleLoader } from '../../store/actions';

export default ({ hideModal }) => {
  const dispatch = useDispatch();

  const handlePosition = async latLng => (
    dispatch(toggleLoader()),
    await dispatch(getDailyForecast({ latitude: latLng[0], longitude: latLng[1] })),
    dispatch(toggleLoader()),
    hideModal()
  );

  return (
    <div>
      <Map handlePosition={handlePosition} />
    </div>
  );
};
