import React from 'react';
import FriendItem from './fiendItem/FriendItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <div>
      <ul>
        <FriendItem friends={friends} />
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
