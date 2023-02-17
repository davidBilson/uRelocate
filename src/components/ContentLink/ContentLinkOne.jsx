import React from 'react'
// import { Link } from 'react-router-dom'

const ContentLinkOne = (props) => {
  return (
    <h3>
        <a href={props.to}>{props.linkText}</a>
    </h3>
  )
}

export default ContentLinkOne