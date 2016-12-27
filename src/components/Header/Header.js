import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Header = (props) => {
  const { theme } = props

  return (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={theme.routeActive}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={theme.routeActive}>
      Counter
    </Link>
  </div>
  )
}

export default Header
