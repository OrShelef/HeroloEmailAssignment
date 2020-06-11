
import React from 'react'
import classes from './mailListItem.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import {ListItem,Avatar,ListItemText,ListItemSecondaryAction,IconButton,ListItemAvatar} from '@material-ui/core';
const MailListItem = (props) => {

    return (
        <ListItem button selected={props.selected} onClick={props.onSelected}>
                  <ListItemAvatar>
                    <Avatar>
                    <img src={props.image}/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={props.text}
                    secondary={props.timeStamp}
                  />
                  <ListItemSecondaryAction className={classes.delete_button}>
                    <IconButton onClick={props.onDelete} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
    )
}

export default MailListItem
