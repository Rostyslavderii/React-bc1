import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.scss';
import cn from 'classnames';

function Profile(props) {
  const style = {
    //color: 'black!!!
    margin: 8,
    color: /*black*/ 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101',
  };
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
        alt="User avatar"
        class="avatar"
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
      {/* <Alert variant="warning " outlined={props.likes} textCenter={props.views}>
        Here is an orang Alert
      </Alert>
      <Alert variant="warning">Here is an colol Alert</Alert>
      <Alert variant="warning">Here is an start Alert</Alert> */}
    </div>
  );
}

// Profile.propTypes = {
//   productPrice: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   aboba: PropTypes.string.isRequired,
//   showDiscount: PropTypes.bool,
// }

export default Profile;
