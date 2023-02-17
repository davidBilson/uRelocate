import React from 'react'

const Tag = (props) => {
  return (
    <button className={props.tagClass}>{props.tagName}</button>
  )
}

export default Tag