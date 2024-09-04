import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function PostCard() {
  const { postid } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching post:', error));
  }, []);
  
  return (
    <div id='PostCard'>
      <Link id='imageHolder' to={`/users/${data.userId}`}>{data.userId}</Link>
      <div id='container'>
        <div id='titleHolder'>{data.title}</div>
        <div id='bodyHolder'>{data.body}</div>
      </div>
    </div>
  )
}

export default PostCard