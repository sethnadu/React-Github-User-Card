import React from 'react';
import UserCard from "./Component/user.js";
// import FollowerCards from "./Component/followerCard.js";
import './App.css';

// https://api.github.com/users/sethnadu




class App extends React.Component {
    constructor() {
      super();
      this.state = {
        user: [],
        followers: [],
        followersNames: [],
        // cards: ['sethnadu'],
        cardsArray: []
        
        
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
          this.state.followersNames.map(name => {
            fetch(`https://api.github.com/users/${name}`).then(response => response.json())
                .then(response => {
                    console.log(response)
                    return this.setState({cardsArray: [...response, {response}]})
                })})
      })

      
  render() {
      
    // console.log(this.state.user)
    // console.log(this.state.followers)
    // console.log(this.state.followersNames)
    console.log(this.state.cardsArray)



  
  return (
    <div className="App">
        <h2>Github User Cards</h2>
        <div>
        {/* <FollowerCards followersNames = {this.state.followersNames} /> */}
        <UserCard user = {this.state.user} followers = {this.state.followers}  />
        </div>
    </div>
  );
 } 
}

export default App;
