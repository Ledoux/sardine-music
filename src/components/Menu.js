import classnames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'

import Link from './Link'
import links from '../utils/links'

const Menu = ({
  isNavigationActive,
  match
}) => {
  console.log('match', window.location.pathname)
  return (
    <div className={classnames('menu p3', { 'menu--active': isNavigationActive })}>
      {
        links.map(({ indexName, label, path }, index) => (
          <div className='menu__link mb2' key={index}>
            <Link className={classnames('link h2', {
              'menu__link--active': match.path === (path || `/${indexName}`) })}
              href={`/${indexName}`}
            >
              {label}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default compose(
  connect(state => ({ isNavigationActive: state.navigation.isActive })),
  withRouter
)(Menu)
