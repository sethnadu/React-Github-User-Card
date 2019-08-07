import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import GithubIcon from "../Assets/githublogo.png";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    backgroundColor: "lightgray",
    border: "4px solid lightgray",
    margin: "20px auto"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: "300px",
    display: "flex",
    margin: "auto"
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "white",

  },
  githubLogo: {
      width: "43px"
  },
  left: {
      textAlign: "left"
  },
  span: {
      color: "blue",
      fontWeight: "bold"
  },
  
}));

function UserCard({user, followers}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <div>
            <h2>User</h2>
             <Card className={classes.card}>
      <CardHeader
        avatar={
       <a href = {user.html_url}> <Avatar aria-label="recipe" className={classes.avatar}>
            {<img className={classes.githubLogo} alt = "github" src = {GithubIcon}/>}
          </Avatar></a>
        }
        action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
        title={user.login}
        subheader={user.name}
      />
       <CardMedia
        className={classes.media}
        image= {user.avatar_url} 
        title="Avatar Image"
      ></CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        </IconButton>
        <IconButton aria-label="share">
         
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>GitHub Info</Typography>
          <Typography className = {classes.left} paragraph>
            <span className = {classes.span}>Repos: </span>{user.public_repos}
            <br />
            <span className = {classes.span}>Repos Url : </span>{user.repos_url}
          </Typography>
          <Typography className = {classes.left} paragraph>
          <span className = {classes.span}>Following: </span>{user.following}
           
            <br />
            <span className = {classes.span}> Followers </span>{user.followers}:
            <br />
             Max of Thirty:
            {followers.map(follower => {
              return (
                     <li key = {follower.id}>{follower.login}</li>
              ) 
            })}
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

           

        </div>
    )
}

export default UserCard;