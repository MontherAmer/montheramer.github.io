import React from 'react';
import { useSelector } from 'react-redux';
import windIcon from '../../assets/icons/wind.png';

import Image from '../Image';

import styles from './index.module.css';
export default () => {
  const { weathers } = useSelector(state => state.mainState);

  const data = weathers[0];
  return (
    <div className={styles.container}>
      {data?.map((item, i) =>
        i === 0 ? (
          <div className={styles.section} key={i}>
            <div className={styles.cardBG}>
              <div className={styles.cardBGHeader}>{item.city || 'Unknown Place'}</div>
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
                    <Image value={item.icon} height='100px' />
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
          </div>
        ) : i % 2 !== 0 ? (
          <div className={styles.section} key={i}>
            <div className={styles.cardSM}>
              <h1>{item.day.toUpperCase()}</h1>
              <div className={styles.tempContainer}>
                <h2>{item.dayTemp}&#8451;</h2>
                <h3>{item.nightTemp}&#8451;</h3>
              </div>
              <Image value={item.icon} height='40px' />
            </div>
            <div className={styles.cardSM}>
              <h1>{data[i + 1].day.toUpperCase()}</h1>
              <div className={styles.tempContainer}>
                <h2>{data[i + 1].dayTemp}&#8451;</h2>
                <h3>{data[i + 1].nightTemp}&#8451;</h3>
              </div>
              <Image value={item.icon} height='40px' />
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};
