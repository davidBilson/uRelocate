import React from 'react'
import Date from '../DateIcon/Date'
import ContentLinkOne from '../ContentLink/ContentLinkOne'
import Tag from '../Tags/Tag'

const CardOne = (props) => {
  return (
    <div className={props.boxOneClassName}>
      <div className={props.boxTwoClassName}>
        <div>
        <Tag tagName={props.tagName} tagClass={props.tagClass} />
          <ContentLinkOne to={props.contentLink} linkText={props.linkText} />
          <Date date="Jan 7th, 2023" />
        </div>
      </div>
    </div>
  )
}

export default CardOne