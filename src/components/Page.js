import classnames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const Page = ({ children, isNavigationActive }) => {
  return (
    <main className={classnames("page", {
      "page--shift": isNavigationActive
    })}>
      {children}
    </main>
  )
}

export default connect(
  state => ({ isNavigationActive: state.navigation.isActive })
)(Page)
