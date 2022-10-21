import React from 'react';
import FriendItem from './fiendItem/FriendItem';
// import PropTypes from 'prop-types';
// import styles from './friends.module.scss';
// import cn from 'classnames';

function FriendList({ friends }) {
  return (
    <div>
      <ul>
        <FriendItem friends={friends} />
      </ul>
    </div>
  );
}

export default FriendList;
