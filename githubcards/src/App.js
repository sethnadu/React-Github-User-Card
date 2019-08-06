import React from 'react';
import logo from './logo.svg';
import './App.css';

// https://api.github.com/users/sethnadu




class App extends React.Component {
    constructor() {
      super();
      this.state = {
        user: [],
        followers: []
      }
    }

    fetchInfo = Promise.all([
      fetch("https://api.github.com/users/sethnadu").then(response => response.json()),
      fetch("https://api.github.com/users/sethnadu/followers").then(response => response.json())
    ])
      .then(([userGithub, userFollowers]) => {
          this.setState({user: userGithub})
          this.setState({followers: userFollowers})
      })


  render() {
    console.log(this.state.user)
    console.log(this.state.followers)
  return (
    <div className="App">
      
    </div>
  );
 } 
}

export default App;
