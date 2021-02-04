import './App.css';
import Header from './Header.js'

import AdSense from 'react-adsense';

import React, { Suspense } from "react";
import SideBar from './SideBar'
import Home from './Home.js'
import { makeStyles } from '@material-ui/core/styles';
import { Container, IconButton, Menu, MenuItem, Snackbar, SnackbarContent, Avatar, CardHeader, Badge, Drawer, Fab, Icon, AppBar, Tabs, TabPanel, Divider } from '@material-ui/core';
import Welcome from './Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const mytestFucnt = function(){
  console.log("asdd");

}



function App() {
  return (
    
    <Container fixed >
       <Router>
     
        <AdSense.Google
          client='ca-pub-1354169291553540'
          slot='7806394673'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
        />

        <Header></Header>
        
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Welcome" component={Welcome}/>
        </Switch>
        
      </Router>
      <SideBar></SideBar>

    </Container>
    
  );
}

export default App;
