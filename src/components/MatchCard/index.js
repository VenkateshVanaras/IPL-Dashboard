// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachItem
  console.log(competingTeam)
  console.log(competingTeamLogo)
  console.log(result)
  console.log(matchStatus)

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="match-card-image"
      />
      <p className="match-card-para">{competingTeam}</p>
      <p className="match-card-para">{result}</p>
      <p className="match-card-para">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
