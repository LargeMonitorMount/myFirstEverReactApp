import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box, Card, CardHeader, Grid,  Button } from '@material-ui/core';
import { db } from './Firebase';
import Comment from './Comment';
import firebase from 'firebase';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
    flexGrow: 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
 
});
 
export default function SimpleCard(props) {
  const classes = useStyles();
  const [comments, setcomments] = useState([])
  const [comment, setComment] = useState('')
  useEffect(() => {
      let unsubscribe;
      
      if (props.postId) {
        
        unsubscribe = db
            .collection('posts')
            .doc(props.postId)
            .collection('comments')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) =>{
                setcomments(snapshot.docs.map((doc) => doc.data()));
            });
      }
      return () => {
        unsubscribe();
      };
  }, [props.postId]);

  function postComment(e){
    e.preventDefault();
    db
            .collection('posts')
            .doc(props.postId).collection('comments').add({
                text:comment,
                username:props.loggedInuser.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        setComment('')
  }



  return (
      <Box boxShadow={3} className={classes.root}>
        
        <Card>    
            <CardHeader
                avatar={
                    <Avatar aria-label="">
                            {props.username?props.username.charAt(0):  "🥕"}
                    </Avatar>
                }
                title={props.username? props.username: "🤸"}
                subheader="Head of whatever"
            />
            
            <CardContent>        
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
        
            {props.loggedInuser? 
                <form onSubmit={postComment}>
                    <Grid container  >
                        <Grid item   >
                            <b>{props.loggedInuser?.displayName}</b>
                        </Grid>
                        <Grid item >
                            <input type="text"
                                placeholder="Comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </Grid>
                        <Grid item >
                            <Button disabled={!comment} type="submit"   variant="text" color="default">
                                Post Comment
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            :
                <p>be kell jelentkezni hogy kommentelj</p>
            }
        {
            comments.map((comment) =>(
                <Comment text={comment.text} user={comment.username} /> 
            ))
        }
    </Box>
  );
}


