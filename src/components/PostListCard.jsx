import React from 'react'
import { Link } from 'react-router-dom'

function PostListCard(props) {
  const userid = props.userid
  const title = props.title
  const id = props.id  
  
  return (
    <div id='PostListCard'>
      <Link id='imageHolder' to={`/users/${userid}`}> {userid} </Link>
      <Link id='titleHolder' to={`/users/${userid}/posts/${id}`}>{title}</Link>
    </div>
  )
}

export default PostListCard 