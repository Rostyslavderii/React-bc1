import React from 'react';
import styles from './friendsItem.module.scss';
import cn from 'classnames';

function FriendItem({ friends }) {
  return (
    <>
      {friends.map(label => (
        <li className={cn(styles.item)} key={label.id}>
          <span className={label.isOnline ? styles.isTrue : styles.isFalse}>
            {label.isOnline}
          </span>
          <img
            className={cn(styles.avatar)}
            src={label.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={cn(styles.name)}>{label.name}</p>
        </li>
      ))}
    </>
  );
}
export default FriendItem;
