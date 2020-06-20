import React, {useContext, memo} from 'react';
import {DispatchContext, AccountsContext} from '../contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
 function CheckboxListSecondary() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);
  
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  }
function Account({id, name, amount }) {
    const dispatch = useContext(DispatchContext);
   
    return (
        
        <Grid container alignItems="center">
          <ListItem key={id} button style={{width: "70%"}}>
            <ListItemText id={id} primary={name} style={{width: "50%"}}/>
            <ListItemText id={id} edge="end" style={{width: "30%", textAlign: "right"}}> $ {amount}</ListItemText>
          </ListItem>
          
            <ListItemSecondaryAction style={{width:"20%", display: "flex"}}>
              <IconButton aria-label='Details' style={{paddingRight: 0}}>
                <DetailsTwoToneIcon />
              </IconButton>
              <IconButton aria-label='Edit' >
                <EditTwoToneIcon />
              </IconButton>
            </ListItemSecondaryAction>
         
        </Grid>
       
     
    )
}

export default Account;