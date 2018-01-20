import React from 'react'

const Item = ({ children }) => {
  return [
      children,
      <div className="sep mb2" key='sep' />
  ]
}

export default Item
