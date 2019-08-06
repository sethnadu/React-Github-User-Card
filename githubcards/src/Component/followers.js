// .then(
      //   this.state.followersNames.map(name => {
      //   fetch(`https://api.github.com/users/${name}`).then(response => response.json())
      //    .then(response => {
      //      console.log(response)
      //      return this.setState({cardsArray: [...this.state.followersNames, response]})
      //  }, [])
      //  }))
      //  .catch(err => {
      //    console.log("There was an error", err)
      //  })
     
   

  //    fetchFollowers = () => {
  //     console.log(this.state.followersNames)
  //     this.state.followersNames.map(name => {
  //      fetch(`https://api.github.com/users/${name}`).then(response => response.json())
  //       .then(response => {
  //         console.log(response)
  //         return this.setState({cardsArray: [...this.state.followersNames, response]})
  //     }, [])
  //     .catch(err => {
  //       console.log("There was an error", err)
  //     })
  //   })
  // }