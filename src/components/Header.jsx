import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div id='Header'>
        <Link to='/'>Users</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </>
  )
}

export default Header