import Date from '../DateIcon/Date'
import Tag from '../Tags/Tag'
import { Link } from 'react-router-dom';

const CardOne = (props) => {
  return (
    <div className={props.boxOneClassName}>
      <div className={props.boxTwoClassName}>
        <div>
          <Tag tagName={props.tagName} tagClass={props.tagClass} /><br />
          <Link id={props.id} to={`/article/${props.id}`}>{props.linkText}</Link>
          <Date date="Jan 7th, 2023" />
        </div>
      </div>
    </div>
  )
}

export default CardOne