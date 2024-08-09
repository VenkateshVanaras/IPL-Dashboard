// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, matchesList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()
    const updatedList = teams.map(eachElement => ({
      id: eachElement.id,
      name: eachElement.name,
      teamImgUrl: eachElement.team_image_url,
    }))

    this.setState({isLoading: false, matchesList: [...updatedList]})
  }

  render() {
    const {isLoading, matchesList} = this.state
    console.log(matchesList)

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="orange" height={80} width={80} />
          </div>
        ) : (
          <div className="app-container">
            <div className="home-container">
              <img
                alt="ipl logo"
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-list">
              {matchesList.map(eachItem => (
                <TeamCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
