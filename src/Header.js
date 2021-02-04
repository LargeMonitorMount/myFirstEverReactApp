import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {Box,AppBar,Toolbar,Typography,Button,IconButton, ButtonGroup, Modal, FormControl, FormGroup, FormHelperText, FormLabel,  TextField} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ProfileControl from './ProfileControl';
import { Link,  } from 'react-router-dom';
import { auth } from './Firebase';
import SimpleTabs from './SimpleTab';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    input: {
      margin: 5 ,
    }
  }));
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  
    
  
 
export default function  Header () {
    const classes = useStyles();
   
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [openlogin, setopenlogin] = useState(false)

    const [email, setEmail] = useState('');
    const [passwd, setpasswd] = useState('');
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          //console.log(authUser)
          setUser(authUser)
        }else{
          setUser(null)
        }
      });

      return () => {
        //preform some cleanup
        unsubscribe();
      }

    }, [user,username])


    const signup = (event) => {
      event.preventDefault();
      auth.
      createUserWithEmailAndPassword(email,passwd)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName:username,
        });
        
      })
      .catch((error) => {alert(error)}) 
      setOpen(false)
    } 
    const login  = (event) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email,passwd).then((user) => {
        //console.log(user)
      }).catch((error) => {alert(error)})
      setOpen(false)
    }
    
    const sigupform = (

      <FormControl component="fieldset">
        <FormLabel component="legend">Sign Up Form</FormLabel>
        
        <FormGroup>
          
          <TextField className={classes.input} onChange={(e) => setEmail(e.target.value)} required label="email" type="email" placeholder="jóska69@átbekapod.hu" variant="outlined" />
          <TextField className={classes.input} onChange={(e) => setUsername(e.target.value)} required label="username" type="text" placeholder="jóska69" variant="outlined" />
          <TextField className={classes.input} onChange={(e) => setpasswd(e.target.value)} required label="passwd" type="password" placeholder="password" variant="outlined"/>
          <label>* kötelező kitölteni.</label>
          <Button variant="contained" color="primary" type="submit" onClick={signup}>
            Sing Up
          </Button>
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
    )

    const loginForm = (
      <FormControl component="fieldset">
        <FormLabel component="legend">Login</FormLabel>
          <FormGroup>
            
            <TextField className={classes.input} onChange={(e) => setEmail(e.target.value)} required label="email" type="email" placeholder="jóska69@átbekapod.hu" variant="outlined" />
            <TextField className={classes.input} onChange={(e) => setpasswd(e.target.value)} required label="passwd" type="password" placeholder="password" variant="outlined"/>
            <label>* kötelező kitölteni.</label>
            <Button variant="contained" color="primary" type="submit" onClick={login}>
              Sing Up
            </Button>
          </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>

    )
    const siginvssiguptabs =  (
    
     
        <div style={modalStyle} className={classes.paper}>

          <SimpleTabs tab1={sigupform} tab2={loginForm} />
                  
        </div>
      

    )
    return (
        <div p = {2}>
            <Box>
                <AppBar position="static" p={2}>
                    <Toolbar>
                        
                        <ButtonGroup  color="inherit" aria-label="">
                          <Button component={Link} to="/">Home</Button>
                          <Button component={Link} to="/Welcome">Welcome</Button>
                        </ButtonGroup>
                        
                        <Typography variant="h6" className={classes.title}>
                         <center>🍆 🚀 🛩️ ⛰️ 💦</center> 
                        </Typography>
                        <ProfileControl setOpenSigup={setOpen} setopenlogin={setopenlogin} user={user} />

                        
                    </Toolbar>
                </AppBar>
                
            </Box>
            
            <Modal
              open={open}
              onClose={() => setOpen(false)}
            >
              {siginvssiguptabs}
              
            </Modal>
            
        </div>
        
    )
    
}





