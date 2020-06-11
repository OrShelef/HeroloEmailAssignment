import React, { useEffect } from 'react';
import logo from './logo.svg';
import classes from  './App.module.css';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import {withRouter,Switch,Route,useHistory} from 'react-router-dom';
import MangeEmailPage from './pages/MangeEmail/mangeEmail';
import ComposeEmailPage from './pages/ComposeEmail/composeEmail';
import Auth from './pages/Auth/Auth';




function App(props) {
  const history=useHistory();

  useEffect(() => {
    console.log(props);
    
    if(!localStorage.getItem('token'))
    {
      history.push('/Login');
    }
    
    return () => {
     
    }
    
  }, []);
  const TopBar=()=>
  {
    
    const onLogin=()=>
    {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      history.push('/Login');
    }
    return(<AppBar position="static">
            <Toolbar className={classes.tool_bar}>
              <Typography variant="h6" >
                HEROLO
              </Typography>
              <Button onClick={onLogin} color="secondary">Logout</Button>
            </Toolbar>
        </AppBar>)
  }
  return (
    <div className={classes.root}>
     {!props.location.pathname.includes('Login')&&<TopBar/>}
      
        <Switch>
          <Route exact path="/" component={MangeEmailPage} />
          <Route path="/ComposeEmail" component={ComposeEmailPage} />
          <Route path="/Login" component={Auth} />

        </Switch>
     
    
  </div>
  );
}

export default withRouter(App);
