import React from 'react'
import classes from './composeEmail.module.css';
import {Dialog,DialogActions ,DialogContent ,DialogContentText ,DialogTitle,Button,TextField,InputAdornment } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SubjectIcon from '@material-ui/icons/Subject';
import axios from '../../axios';
import { useSnackbar } from 'material-ui-snackbar-provider';
const ComposeEmailPage = (props) => 
{
    const { register, handleSubmit } = useForm(); 
    const history=useHistory();
    const snackbar=useSnackbar();

    const handleClose=()=>{
        history.push('/');
      
    }
    const onSubmit=(formData)=>
    { 
        const token=localStorage.getItem('token');
        const senderID=JSON.parse(localStorage.getItem('currentUser')).id;
        axios.post(`/Messages`,{...formData,id:Date.now(),senderID:senderID,timeStamp:
        new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit" 
          }).format(Date.now())},{headers:{ Authorization: `Bearer ${token}`}}).then(res=>{
              console.log(res);
              
            snackbar.showMessage('Email Sent Succuesfully');
            handleClose();
        }).catch(err=>console.log(err));
        
        
    }

    const Input=({name,icon,type='string',fullwidth=true,rows=1})=>{
        return(
        <TextField
        fullWidth={fullwidth}
        margin="dense"
        id={name}
        label={name[0].toUpperCase()+name.substr(1)}
        name={name}
        type={type}
        multiline={fullwidth}
        rows={rows}
        required
        inputRef={register()}
        InputProps={icon && {
            startAdornment: (
              <InputAdornment position="start">
                {icon}
              </InputAdornment>
            ),
          }}
    />)
    }
    return (
        <div className={classes.root}>
            <Dialog open={true}  aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Compose E-Mail</DialogTitle>
                <DialogContent>
                <DialogContentText>
                   
                </DialogContentText>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="to" icon={<AccountCircleIcon/>} type="number" fullwidth={false}/>
                <Input name="subject" icon={<SubjectIcon/>} />
                <Input name="message"   rows={8} />
               
                 <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button  type="submit" variant="contained" color="secondary">
                 Send E-Mail
                </Button>
                </DialogActions>
                </form>
                
                </DialogContent>
               
            </Dialog>
        </div>
    )
}

export default ComposeEmailPage
