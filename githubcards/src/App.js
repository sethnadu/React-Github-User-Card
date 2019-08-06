import React from 'react';
import UserCard from "./Component/user.js";
import './App.css';

// https://api.github.com/users/sethnadu




class App extends React.Component {
    constructor() {
      super();
      this.state = {
        user: [],
        followers: [],
        followersNames: []
      }
    }

    componentDidMount() {
      this.fetchInfo();
    }



    fetchInfo = () => Promise.all([
      fetch("https://api.github.com/users/sethnadu").then(response => response.json()),
      fetch("https://api.github.com/users/sethnadu/followers").then(response => response.json())
    ])
      .then(([userGithub, userFollowers]) => {
          this.setState({user: userGithub})
          this.setState({followers: userFollowers})
          this.setState({followersNames: userFollowers.map(follower => {
            return follower.login
          })})
      })


  render() {
    console.log(this.state.user)
    console.log(this.state.followers)
    console.log(this.state.followersNames)
  return (
    <div className="App">
        <h2>Github User Cards</h2>
        <div>
        <UserCard user = {this.state.user} followers = {this.state.followers} />
        {/* {this.state.followersNames.map()} */}
        </div>
    </div>
  );
 } 
}

export default App;
