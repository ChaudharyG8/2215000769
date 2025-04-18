import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/top-users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map(user => (
        <div key={user.id} className="bg-white rounded-2xl shadow p-4">
          <img src={user.imageUrl} alt={user.name} className="w-16 h-16 rounded-full mb-2" />
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">Posts: {user.postCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TopUsers;