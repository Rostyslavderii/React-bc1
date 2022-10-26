import user from './User.json/user.json';
import data from './Statistics/data.json';
import Profile from './Profile';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from './Transactions/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory';

export const App = () => {
  //   const tacos = [
  // {
  //   id:1,
  //   imageUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  //   productPrice: 10.99,
  //   obj: {1: 1, 2: 2, 3: 3, 4: 4, 5: 5},
  //   showDiscount: true,
  // },
  // ]
  console.log({ friends });
  console.log(friends);
  return (
    <>
      <div>
        <Profile
          //название текста в Карточке Профиля
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
