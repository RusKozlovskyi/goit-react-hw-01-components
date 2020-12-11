import React from 'react'

import user from './Profile/user.json'
import Profile from './Profile/profile'
import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/statistics'
import friends from './FriendList/friends.json'
import FriendList from './FriendList/friendList'
import transactions from './TransactionHistory/transactions.json'
import TransactionHistory from './TransactionHistory/transactionHistory'

const App = () => {
    return (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />;
        <FriendList friends={friends} />,
        <TransactionHistory items={transactions} />;
      </>
    )
};

export default App;