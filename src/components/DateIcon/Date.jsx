import React from 'react'
import DateIcon from './DateIcon'

const Date = (props) => {
  return (
    <p className="card-date"><DateIcon /> {props.date}</p>
  )
}

export default Date