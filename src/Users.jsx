import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersCard from './components/UsersCard';

function Users() {
  const [uniqueUserIds, setUniqueUserIds] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => {
        const uniqueIds = Array.from(new Set(data.map(item => item.userId)));
        setUniqueUserIds(uniqueIds);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <>
    <h1>List of Users</h1>
      {uniqueUserIds.map(id => <UsersCard id={id} key={id} />)}
    </>
  );
}

export default Users;
