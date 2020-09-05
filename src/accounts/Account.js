import React, {useContext, memo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
// import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { Grid } from '@material-ui/core';
import AccountDetailesButton from './AccountDetailsButton';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
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

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
const Account = memo((props) => {
   
    const classes = useStyles();
    const {id, name, goal, toGo, total, exp} = props
    //const [secondary, setSecondary] = React.useState(false);
    return (
        
        <Grid container alignItems="center">
       
          <ListItem key={id} button style={{width: "70%"}}>
            <ListItemText id={id} primary={name} secondary={ goal ? `Goal: $${goal}` : null} style={{width: "50%"}}/>
            <ListItemText id={id} edge="end" secondary={goal ? `to go: $${toGo}` : null} style={{width: "30%", textAlign: "right"}}> $ {total}</ListItemText>
          </ListItem>
       
            <ListItemSecondaryAction style={{width:"20%", display: "flex", alignItems: "center"}}>
              <AccountDetailesButton {...props} />
              <IconButton aria-label='Edit' >
                <EditTwoToneIcon  />
              </IconButton>
            </ListItemSecondaryAction>
         
        </Grid>
       
     
    )
})

export default Account;