

import React,{useState, Fragment,useEffect} from 'react'
import classes from './mangeEmail.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import {Button,Typography, List, Card, CardHeader, Avatar, IconButton, CardContent, CardActions, TextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import MailListItem from '../../components/MailListItem/mailListItem';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import { useSnackbar } from 'material-ui-snackbar-provider'
import InboxIcon from '@material-ui/icons/Inbox';
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
import DraftsIcon from '@material-ui/icons/Drafts';
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from 'react-router-dom';
import DeleteDialog from '../../components/DeleteDialog/deleteDialog';
import axios from '../../axios';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
         
          <Fragment>
             {children}
          </Fragment> 
          
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
const MangeEmailPage = () => {

    const snackbar = useSnackbar();
    const [currentTab, setCurrentTab] = useState(0);
    const [selected, setSelected] = useState(-1);
    const [comment, setComment] = useState('');
    const [messages, setMessages] = useState([]);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [deleteID, setDeleteID] = useState(-1);
    const history=useHistory();
    const loggedUser=JSON.parse(localStorage.getItem('currentUser'));
    const [users, setUsers] = useState([]);
    const getMessages=()=>{
      const token=localStorage.getItem('token');
      axios.get(`/Messages`,{headers:{ Authorization: `Bearer ${token}`}}).then(res=>
      {
        const {status,messages}=res.data;
        if(status=='success')
        {
          console.log(messages);
          
          setMessages(messages);
        }
      }).catch(err=>{
        console.log(err);
      });
    }
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
    }, [])  
    useEffect(() => {
      getMessages();
      
      return () => {
      
      }
    }, []);

  
    const handleChange=(e,value)=>
    {
        setCurrentTab(value);
    }
    const handleChangeIndex = (index) => {
        setCurrentTab(index);
      };

    const onSelected=(index)=>{
        setSelected(prevState=>index);
      
        
    }

    const onSendComment=()=>{
      const token=localStorage.getItem('token')
      axios.post(`/Messages`,{message:comment,subject:currentMessage.subject,to:currentMessage.senderID,id:Date.now(),senderID:loggedUser.id,timeStamp:
      new Intl.DateTimeFormat("en-GB", {year: "numeric",month: "long",day: "2-digit" }).format(Date.now())},{headers:{ Authorization: `Bearer ${token}`}})
      .then(res=>{
            console.log(res);
            
          snackbar.showMessage('Email Sent Succuesfully');
          setComment('');
          getMessages();
      
      }).catch(err=>console.log(err));
  
    }

    const onComposeEmailClick=()=>{
      history.push('/ComposeEmail');
    }
    const openDeleteDialog=(id)=>{
      setIsDeleteDialogOpen(true);
      setDeleteID(id);

    }
    const onDelete=()=>
    {
      setIsDeleteDialogOpen(false);
     
      const token=localStorage.getItem('token');
      axios.delete(`http://localhost:3333/Messages/${deleteID}`,{headers:{ Authorization: `Bearer ${token}`}}).then(res=>
      {
        const {status,messages}=res.data;
        if(status=='success')
        {
          setMessages(messages);
        }
      }).catch(err=>{
        console.log(err);
        
      })
      setDeleteID(-1);
      setSelected(-1);

    }

    const getUserImage=(index=-1)=>
    {
      const otherUser=users.filter(user=>user.id==(index===-1?currentMessage.senderID:index));

      if(otherUser.length>0)
      {
        return otherUser[0].image;
      }
      return "";
    }
   const currentMessage=messages.filter(m=>m.id==selected).length>0?messages.filter(m=>m.id==selected)[0]:{};

    const renderTabsComponent=loggedUser && (
      <div className={classes.tabs}>
        <Avatar className={classes.user_avatar}>
          <img src={loggedUser.image.replace('thumb/','')}/>
        </Avatar>
        <Typography>
          {loggedUser.email}
        </Typography>
        <Button onClick={onComposeEmailClick} variant="contained" color="secondary" className={classes.button} startIcon={<AddIcon />}>
           Compose Email
        </Button>
        <Tabs value={currentTab} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="functions tabs" orientation="vertical" style={{width:'100%'}}>
          <Tab className={classes.tab} label="Inbox" icon={<InboxIcon/>} />
          <Tab className={classes.tab} label="Sent" icon={<EmailIcon/>}/>
        </Tabs>   
      </div>
    );
    const renderMailMessage=selected!=-1?(
    <Card className={classes.card_root}>
        <CardHeader  avatar={<Avatar><img src={getUserImage()}/></Avatar>} title={currentMessage.subject} subheader={currentMessage.timeStamp}/>
       
        <CardContent className={classes.card_content}>
          {currentMessage.message}
        </CardContent>
        <CardActions className={classes.card_actions}>
        <TextField fullWidth id="standard-Comment" label="Comment" placeholder="Enter text for comment" multiline onChange={(e)=>setComment(e.target.value)} value={comment} />
          <IconButton disabled={comment.length===0} onClick={onSendComment}>
            <CreateSharpIcon/>
          </IconButton>
        </CardActions>
    </Card>):
    <div className={classes.defualtBG}>
      <p>Please select mail</p>
      <img src="https://cdn.business2community.com/wp-content/uploads/2019/11/sending.gif"/>
    </div>
    
    
    if(!localStorage.getItem('token'))
    {
      history.push('/Login');
      return null;
    }
    return (
        <div className={classes.root}>
        {renderTabsComponent}

        <SwipeableViews  index={currentTab} onChangeIndex={handleChangeIndex}>
          <TabPanel value={currentTab} index={0}>
          <List>
                {messages.filter(msg=>msg.to==loggedUser.id).map((item,index)=>{
                  return  <MailListItem image={getUserImage(item.senderID)} onDelete={()=>openDeleteDialog(item.id)} selected={selected==item.id} onSelected={()=>onSelected(item.id)} text={item.subject} timeStamp={item.timeStamp} key={item.timeStamp+index}/>
                })}
            </List>
          </TabPanel>
          <TabPanel value={currentTab} index={1} >
            <List>
                {messages.filter(msg=>msg.senderID==loggedUser.id).map((item,index)=>{
                  return  <MailListItem image={getUserImage(item.to)}  onDelete={()=>openDeleteDialog(item.id)} selected={selected==item.id} onSelected={()=>onSelected(item.id)} text={item.subject} timeStamp={item.timeStamp} key={item.timeStamp+index}/>
                })}
            </List>
          </TabPanel>
        </SwipeableViews>
        {renderMailMessage}
        <DeleteDialog open={isDeleteDialogOpen} setOpen={setIsDeleteDialogOpen} onDelete={onDelete}/>
        </div>
    )
}

export default MangeEmailPage
