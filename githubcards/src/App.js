import React from 'react';
import UserCard from "./Component/user.js";
// import FollowerCards from "./Component/followerCard.js";
import './App.css';
import Styled from "styled-components"

// https://api.github.com/users/sethnadu


const MainContainer = Styled.div `
  margin: 30px;
  display: flex;

`




class App extends React.Component {
    constructor() {
      super();
      this.state = {
        user: [],
        followers: [],
        followersNames: [],
        cardsArray: [],
        cards: []
        
        
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
                    return this.setState({cardsArray: [response]})
                    })
                    }) 
              //  .then(item => {
              //         console.log(item)
              //         return this.setState({cards: [...item] })
              //       }
                      
              //       )
      })

      
  render() {
      
    // console.log(this.state.user)
    // console.log(this.state.followers)
    // console.log(this.state.followersNames)
    console.log(this.state.cardsArray)
    console.log(this.state.cards)



  
  return (
    <div className="App">
        <h2>Github User Cards</h2>
        <MainContainer>
        {/* <FollowerCards followersNames = {this.state.followersNames} /> */}
        <UserCard user = {this.state.user} followers = {this.state.followers}  />
        </MainContainer>
    </div>
  );
 } 
}

export default App;
