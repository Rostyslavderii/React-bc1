import React from 'react';

import styles from './Statistics.module.scss';
import cn from 'classnames';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({ title, stats }) {
  console.log('props', title, stats);
  return (
    <section className={cn(styles.statistics)}>
      {/* <h2 className={cn(styles.title)}>Upload stats</h2> */}
      {title && <h2 className={cn(styles.title)}>{title}</h2>}
      <ul className={styles.stats}>
        {stats.map(label => (
          <li
            // className={cn(styles.secondList, {
            //   title: styles.firstList === true,
            // })}
            className={title ? styles.firstList : styles.secondList}
            key={label.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styles.label}>{label.label}</span>
            <span className={styles.percentage}>{label.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
