import React from 'react'

const Tag = (props) => {
  return (
    <>
    {props.tagName && <button className={props.tagClass}>{props.tagName}</button>}
    </>
  )
}

export default Tag