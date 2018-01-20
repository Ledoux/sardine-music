import React from 'react'

import { Link as ReactRouterLink } from 'react-router-dom'

const Link = props => {
  const useAnchor = (props.target && props.target === '_blank') ||
    props.download ||
    props.external
  const linkProps = Object.assign({ className: props.className || 'link' }, props)
  const LinkComponent = useAnchor ? 'a' : ReactRouterLink
  delete linkProps.external
  if (typeof props.href === 'undefined' && props.onClick) {
    return <button {...props} />
  } else {
    return <LinkComponent {...linkProps} to={props.href} />
  }
}

export default Link
