import React from 'react'
import { Link } from 'react-router-dom'

function UsersCard(props) {
  return (
    <>
    <Link to={`/users/${props.id}`} id='UsersCard'>
      <div id='imageHolder'>{props.id}</div>
      <div id='NameHolder'>{`User: ${props.id}`}</div>
    </Link>
    </>
  )
}

export default UsersCard