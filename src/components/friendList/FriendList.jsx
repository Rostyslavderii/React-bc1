import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(label => {
          return <FriendItem label={label} key={label.id} />;
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
