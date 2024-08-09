// Write your code here
// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isActive: true,
    matchCards: [],
  }

  componentDidMount() {
    this.getTeamsMatchesList()
  }

  getFormattedData = data1 => ({
    umpires: data1.umpires,
    result: data1.result,
    manOfTheMatch: data1.man_of_the_match,
    id: data1.id,
    date: data1.date,
    venue: data1.venue,
    competingTeam: data1.competing_team,
    competingTeamLogo: data1.competing_team_logo,
    firstInnings: data1.first_innings,
    secondInnings: data1.second_innings,
    matchStatus: data1.match_status,
  })

  getTeamsMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }

    this.setState({isActive: false, matchCards: updatedData})
  }

  render() {
    const {isActive, matchCards} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = matchCards

    return (
      <div>
        {isActive ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff " height={80} width={80} />
          </div>
        ) : (
          <div className="team-match-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-image"
            />
            <p className="latest-matches-heading">Latest Matches</p>
            <LatestMatch latestMatch={latestMatch} />
            <ul className="match-card-unordered-list">
              {recentMatches.map(eachItem => (
                <MatchCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
