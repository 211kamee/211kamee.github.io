import React from 'react'
import { useState, useEffect } from 'react';
import PostListCard from './components/PostListCard'

function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      {data.map( (item) => <PostListCard userid={item.userId} title={item.title} id={item.id} key={item.id} /> )}
    </div>
  )
}

export default Posts