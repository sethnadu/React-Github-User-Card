import React from "react";
import UserCard from "./user.js";


function FollowerCards({followersNames}) {

        followersNames.map(name => {
         fetch(`https://api.github.com/users/${name}`).then(response => response.json())
          .then(response => {
            return <UserCard user = {response} />
        }, [])
        .catch(err => {
          console.log("There was an error", err)
        })
      })
    

    return (
        <div>
        </div>
    )
}

export default FollowerCards;