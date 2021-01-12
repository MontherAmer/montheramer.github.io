import React from 'react';

import clearIcon from '../../assets/icons/clear1.svg';
import windIcon from '../../assets/icons/wind.png';

import styles from './index.module.css';
export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.cardBG}>
          <div className={styles.cardBGHeader}>London</div>
          <div className={styles.cardBGBody}>
            <div className={styles.cardBGFirst}>
              <div className={styles.cardBGRight}>
                <p>MONDAY</p>
                <div className={styles.tempContainer}>
                  <p>25&#8451;</p>
                  <p>25&#8451;</p>
                </div>
              </div>
              <div className={styles.cardBGRight}>
                <img src={clearIcon} className={styles.icon} />
              </div>
            </div>
            <div className={styles.cardBGSecond}>
              <div className={styles.windSpeed}>
                <p>15 K/H</p>
                <img src={windIcon} />
              </div>
              <h3>08:30 AM</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.cardSM}>
          <h1>WIDNESDAY</h1>
          <div className={styles.tempContainer}>
            <h2>25&#8451;</h2>
            <h3>13&#8451;</h3>
          </div>
          <img src={clearIcon} />
        </div>
        <div className={styles.cardSM}>
          <h1>WIDNESDAY</h1>
          <div className={styles.tempContainer}>
            <h2>25&#8451;</h2>
            <h3>13&#8451;</h3>
          </div>
          <img src={clearIcon} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.cardSM}>
          <h1>WIDNESDAY</h1>
          <div className={styles.tempContainer}>
            <h2>25&#8451;</h2>
            <h3>13&#8451;</h3>
          </div>
          <img src={clearIcon} />
        </div>
        <div className={styles.cardSM}>
          <h1>WIDNESDAY</h1>
          <div className={styles.tempContainer}>
            <h2>25&#8451;</h2>
            <h3>13&#8451;</h3>
          </div>
          <img src={clearIcon} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.cardSM}>
          <h1>WIDNESDAY</h1>
          <div className={styles.tempContainer}>
            <h2>25&#8451;</h2>
            <h3>13&#8451;</h3>
          </div>
          <img src={clearIcon} />
        </div>
        <div className={styles.cardSM}>
          <h1>WIDNESDAY</h1>
          <div className={styles.tempContainer}>
            <h2>25&#8451;</h2>
            <h3>13&#8451;</h3>
          </div>
          <img src={clearIcon} />
        </div>
      </div>
    </div>
  );
};
