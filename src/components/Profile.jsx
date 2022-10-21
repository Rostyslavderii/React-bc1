import React from 'react';
import styles from './Profile.module.scss';
import PropTypes from 'prop-types';

import cn from 'classnames';

function Profile(props) {
  // const style = {
  //   //color: 'black!!!
  //   margin: 8,
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontSize: 40,
  //   color: '#010101',
  // };
  console.log('props', props);
  return (
    //   <div
    //   style={{
    //   styles
    //   }}
    // >
    <div className={styles['ProfileItem']}>
      <img
        className={cn(styles.avatars)}
        src={props.avatar}
        alt={props.username}
      />
      <p className={cn(styles.name)}>{props.username}</p>
      <p className={cn(styles.tag)}>{props.tag}</p>
      <p className={cn(styles.location)}>{props.location}</p>
      <ul className={cn(styles.stats)}>
        <li className={cn(styles.statsLi)}>
          <span className={cn(styles.label)}>Followers</span>
          <span className={cn(styles.quantity)}>{props.stats.followers}</span>
        </li>
        <li className={cn(styles.statsLi)}>
          <span className={cn(styles.label)}>Views</span>
          <span className={cn(styles.quantity)}>{props.stats.views}</span>
        </li>
        <li className={cn(styles.statsLi)}>
          <span className={cn(styles.label)}>Likes</span>
          <span className={cn(styles.quantity)}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
