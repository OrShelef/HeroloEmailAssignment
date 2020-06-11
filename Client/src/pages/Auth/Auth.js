

import React, { useEffect,useState } from 'react';
import { Paper, Button, Avatar } from '@material-ui/core';
import classes from './Auth.module.css';
import axios from '../../axios';
import {useHistory} from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const Auth = () => 
{
    const history=useHistory();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(-1);
    useEffect(() => {
        axios.get('/Auth/')
        .then(result=>{
            
            const {status,users}=result.data;

            if(status=='success'){
                setUsers(users);
            }
        }).catch(err=>{
            console.log(err);
            
        })
        return () => {
            
        }
    }, []);
    const handleChange = (event) => {
        setSelectedUser(event.target.value);
      };
    const OnLogin=()=>{

        axios.post('/Auth/Login',{id:selectedUser}).then(res=>{
            const {token,status,user}=res.data;
            if(status=='success'){
                localStorage.setItem('token',token);
                localStorage.setItem('currentUser',JSON.stringify(user[0]));
                history.push('/');
            }
            
        })
    }
    return (
       <Paper  className={classes.root}>   
        <img src="https://www.newtheatreroyal.com/wp-content/uploads/2014/06/NTR-SNAIL-MAIL-ICON-301x350.png"/> 
        <FormControl fullWidth   variant="outlined">
         <InputLabel id="demo-simple-select-outlined-label">Select User</InputLabel>
         <Select  onChange={handleChange} value={selectedUser} className={classes.select} fullWidth labelId="select-outlined-label" id="demo-simple-select-outlined" label="User">
          {users.map(user=>{
              return <MenuItem key={user.id} classes={{gutters:classes.menuItem}} value={user.id}><Avatar><img src={user.image}/></Avatar>{user.name}</MenuItem>
          })}
        </Select>
      </FormControl>
           <Button disabled={selectedUser==-1} variant="contained" color="primary" onClick={OnLogin}>
               Login
           </Button>
       </Paper>
    )
}

export default Auth
