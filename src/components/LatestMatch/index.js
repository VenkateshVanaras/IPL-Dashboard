// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    result,
    umpires,
    venue,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestMatch
  console.log(latestMatch)

  return (
    <div className="latest-match-container">
      <div className="sub-card-latest-match">
        <p className="competing-team-heading">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt="competing_team_logo"
        className="competing-team-logo"
      />

      <div className="sub-card-2-latest-match">
        <p className="un-conditional-paras">First Innings</p>
        <p className="conditional-paras">{firstInnings}</p>
        <p className="un-conditional-paras">Second Innings</p>
        <p className="conditional-paras">{secondInnings}</p>
        <p className="un-conditional-paras">Man Of The Match</p>
        <p className="conditional-paras">{manOfTheMatch}</p>
        <p className="un-conditional-paras">Umpires</p>
        <p className="conditional-paras">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
