import React from 'react';

import cogIcon from '../../../assets/cog-solid.svg';

import styles from './index.module.css';
import gStyels from '../index.module.css';
export default ({ handleClick, handleUnits, handleOnlyOneLocation, unit, onlyOneLocation, show }) => {
  return (
    <div className={gStyels.cyrcle} onClick={() => handleClick(3)}>
      <img src={cogIcon} className={gStyels.floatbuttonsImage} onClick={() => handleClick(3)} />
      <div className={`${gStyels.bubble} ${show === 3 ? gStyels.showBubble : ''} ${gStyels.thirdBuble}`}>
        <p className={styles.radioItem}>Units:</p>
        <p className={styles.radioItem}>
          <input
            className={styles.radioButton}
            type='radio'
            id='radio-button1'
            name='radio-group'
            checked={unit === 'metric' ? true : false}
          />
          <label for='radio-button1' onClick={() => handleUnits('metric')}>
            Metric
          </label>
        </p>
        <p className={styles.radioItem}>
          <input
            className={styles.radioButton}
            type='radio'
            id='radio-button2'
            checked={unit === 'imperial' ? true : false}
            name='radio-group'
          />
          <label for='radio-button2' onClick={() => handleUnits('imperial')}>
            Imperial
          </label>
        </p>
        <hr />
        <p className={styles.radioItem}>
          <input className={styles.checkButton} type='checkbox' id='onlyOneLocationInput' checked={!!onlyOneLocation} name='radio-group' />
          <label for='onlyOneLocationInput' onClick={handleOnlyOneLocation}>
            Only One Location?
          </label>
        </p>
      </div>
    </div>
  );
};
