import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Followers({cards}) {
    
  const classes = useStyles();


 

  return (
      <div>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cards.avatar_url} 
          title="Avatar Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <br />
          {cards.login}
          <br />
          {cards.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {cards.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <span className = {classes.span}>Repos: </span>{cards.public_repos}
            <br />
          <span className = {classes.span}>Repos Url : </span>{cards.repos_url}
            <br />
          <span className = {classes.span}>Following: </span>{cards.following}
            <br />
          <span className = {classes.span}> Followers </span>{cards.followers}:
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
     

         

      </div>
  )
}

export default Followers;