import React, { memo} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import TransferMoney from '../TransferMoney';
import{month} from '../../helper/datePicker';
// import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { Grid } from '@material-ui/core';
import AccountDetailesButton from './AccountDetailsButton';

function CheckboxListSecondary() {
    // const classes = useStyles();
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


const Account = memo((props) => {
   
    // const classes = useStyles();
    const {id, name, goal, toGo, total} = props;
    let currentDate = new Date();
    let currentMonth = month(currentDate);
    let currentYear = currentDate.getFullYear();

    //const [secondary, setSecondary] = React.useState(false);
    return (
        
        <Grid container alignItems="center">
       
          <ListItem key={id} button style={{width: "70%"}}>
            <ListItemText id={id} primary={name} secondary={ goal ? `Goal: $${goal}` : null} style={{width: "50%"}}/>
            <ListItemText id={id} edge="end" secondary={goal ? `to go: $${toGo}` : null} style={{width: "30%", textAlign: "right"}}> $ {total}</ListItemText>
          </ListItem>
       
            <ListItemSecondaryAction style={{width:"20%", display: "flex", alignItems: "center"}}>
              <AccountDetailesButton {...props} currentMonth currentYear/>
              <IconButton aria-label='Edit' >
                <EditTwoToneIcon  />
              </IconButton>
              <TransferMoney type="account" id={id} name={name} />
            </ListItemSecondaryAction>
         
        </Grid>
       
     
    )
})

export default Account;