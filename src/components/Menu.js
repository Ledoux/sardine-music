import classnames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import Link from './Link'
import routes from '../utils/routes'

const Menu = ({
  isNavigationActive
}) => {
  return (
    <div className={classnames('menu p3', { 'menu--active': isNavigationActive })}>
      {
        routes.map(({ label, path }, index) => (
          <div className='menu__link mb2'>
            <Link className='link h2' key={index} href={path}>
              {label}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default connect(
  state => ({ isNavigationActive: state.navigation.isActive })
)(Menu)
