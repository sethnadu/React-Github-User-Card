import React from 'react';
import UserCard from "./Component/user.js";
import Followers from "./Component/followers.js"
import './App.css';
import Styled from "styled-components"
import Form from "./Component/form.js"

// https://api.github.com/users/sethnadu


const MainContainer = Styled.div `
  margin: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  height: 100%;

`
const Header = Styled.h2 `
  font-size: 2.4rem;

`




class App extends React.Component {
    constructor() {
      super();
      this.state = {
        user: '',
        followers: [],
        followersNames: [],
        cardsArray: [],
        cards: [],
        url: 'sethnadu'
        
        
      }
    }

    componentDidMount() {
      this.fetchInfo();
      
      
    }
    

  

    fetchInfo = () => Promise.all([
      fetch(`https://api.github.com/users/${this.state.url}`).then(response => response.json()),
      fetch(`https://api.github.com/users/${this.state.url}/followers`).then(response => response.json())
    ])
    
      .then(([userGithub, userFollowers]) => {
        console.log(this.state.url)
        console.log(userGithub, userFollowers)
          this.setState({user: userGithub})
          this.setState({followers: userFollowers})
          this.setState({followersNames: userFollowers.map(follower => {
            return follower.login
          })})
      let followersArray = [];    
          this.state.followersNames.map(name => {
           fetch(`https://api.github.com/users/${name}`).then(response => response.json())
                .then(response => {
                    followersArray = [...followersArray, response]
                    // console.log(followersArray)
                    return ( 
                      this.setState({cardsArray: [response]}),
                      this.setState({cards: followersArray})

                    )})
                    }) 
      })


      handleChangeUser = (newName) => {
        console.log(typeof newName, newName)
        this.fetchInfo()
            this.setState ({ 
              // user: `${newName}`
              url: newName
            })
            console.log(this.state.url)
            
            
        }
      

      
  render() {
    console.log(this.state.url)
    console.log(this.state.user)
    // console.log(this.state.followers)
    // console.log(this.state.followersNames)
    // console.log(this.state.cardsArray)
    // console.log(this.state.cards)
  
  return (
    <div className="App">
        <Header>Github User Cards</Header>
        <Form handleChangeUser = {this.handleChangeUser}/>
        <MainContainer>
        {/* <FollowerCards followersNames = {this.state.followersNames} /> */}
        <UserCard key = {this.state.user.id} user = {this.state.user} followers = {this.state.followers}  />
        {this.state.cards.map(card => {
        return <Followers key = {card.id} cards = {card}   />})}
        </MainContainer>
    </div>
  );
 } 
}

export default App;
