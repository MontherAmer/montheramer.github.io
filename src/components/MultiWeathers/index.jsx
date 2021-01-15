import React from 'react';
import { useDispatch } from 'react-redux';

import { removeWeatherCol } from '../../store/actions';
import styles from './index.module.css';

import Image from '../Image';
import windIcon from '../../assets/icons/wind.png';
import closeIcon from '../../assets/close.svg';

export default ({ weathers, themes }) => {
  const dispatch = useDispatch();

  const handleRemove = i => dispatch(removeWeatherCol(i));

  return (
    <div className={styles.wrapper}>
      {weathers.map((data, j) => (
        <div className={styles.container} key={j}>
          {data?.map((item, i) =>
            i === 0 ? (
              <div className={`${styles.cardBG} ${themes[j] ? styles.night : ''}`} key={i}>
                <div className={styles.cardBGHeader}>
                  {item.city || 'Unknown Place'}
                  <img src={closeIcon} className={styles.closeImage} onClick={() => handleRemove(j)} />
                </div>
                <div className={styles.cardBGBody}>
                  <div className={styles.cardBGFirst}>
                    <div className={styles.cardBGRight}>
                      <p>{item.day.toUpperCase()}</p>
                      <div className={styles.tempContainer}>
                        <p>{item.dayTemp}&#8451;</p>
                        <p>{item.nightTemp}&#8451;</p>
                      </div>
                    </div>
                    <div className={styles.cardBGRight}>
                      <Image value={item.icon} height='50px' />
                    </div>
                  </div>
                  <div className={styles.cardBGSecond}>
                    <div className={styles.windSpeed}>
                      <p>{item.speed}</p> &nbsp;
                      <img src={windIcon} />
                    </div>
                    <h3>{item.date}</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${styles.cardSM} ${themes[j] ? styles.night : ''}`} key={i}>
                <h1>{item.day.toUpperCase()}</h1>
                <div className={styles.tempContainer}>
                  <h2>{item.dayTemp}&#8451;</h2>
                  <h3>{item.nightTemp}&#8451;</h3>
                </div>
                <Image value={item.icon} height='40px' />
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};
