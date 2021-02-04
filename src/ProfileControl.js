import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { auth } from './Firebase';


export class ProfileControl extends Component {
    constructor(props) {
        super(props);  
    }
    
    login = () =>{
        this.props.setOpenSigup(true);
    }
    signin = () =>{
        this.login()
    }

    
    logout = () => {
        auth.signOut();
        this.setState({isLoggedIn: false});
        console.log(this.props.user)
    }

    render() {
     
        
        
        return (
            <div>
                
                <ButtonGroup variant="text" color="inherit" aria-label="">
                 
                {this.props.user ?  
                    <Logout color="inherit" onClick={this.logout} />
                :
                    <Login color="inherit" logIn={this.login} signIn={this.signin} /> 
                }
                
                </ButtonGroup>
            </div>
        )
    }
}

function Login(props) {
    return (
        <div>
            <ButtonGroup variant="text" color="inherit" aria-label="">
              <Button onClick={props.logIn}>Login</Button>
              <Button onClick={props.signIn}>Signin</Button>
            </ButtonGroup>
            
        </div>
    )
}   

function Logout(props) {
    return (
        <div>
            <ButtonGroup variant="text" color="inherit" aria-label="">
              
              <Button onClick={props.onClick}>Logout💩</Button>
              
            </ButtonGroup>
        </div>
    )
}





export default ProfileControl
