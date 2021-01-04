import React from 'react';

import loc from '../../assets/loc.svg';
import wind from '../../assets/wind.png';
import close from '../../assets/close.svg';
import sunset from '../../assets/sunset.svg';
import compare from '../../assets/compare.svg';
import sunrise from '../../assets/sunrise.svg';
import icon2 from '../../assets/icons/icon2.svg';
import icon3 from '../../assets/icons/icon3.svg';
import icon5 from '../../assets/icons/icon5.svg';
import icon6 from '../../assets/icons/icon6.svg';
import icon7 from '../../assets/icons/icon7.svg';
import icon8 from '../../assets/icons/icon8.svg';
import clear from '../../assets/icons/clear.svg';

export default ({ value, width, classess, onClick }) => {
  const images = { icon2, icon3, icon5, icon6, icon7, icon8, clear, sunrise, sunset, wind, close, compare, loc };

  const ImageName = images[value];

  return <img src={ImageName} alt={value} style={{ width: `${width}px` }} className={classess ? classess : ''} onClick={onClick} />;
};
