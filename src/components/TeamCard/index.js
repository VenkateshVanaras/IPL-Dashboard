// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImgUrl} = eachItem

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImgUrl} alt={name} className="team-card-image" />
        <p className="team-card-para">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
