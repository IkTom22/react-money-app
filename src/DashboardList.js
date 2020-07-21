import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { Grid } from '@material-ui/core';
import DashboardLists from './DashboardLists';
import BudgetIcons from './BudgetIcons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    picked: {
        height: '40px',
        width: '40px',
        '& > *': {
          transform: 'scale(1.2)',
          padding: '4px'
        }
    },
  }));
function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }  
 

function DashboardList(props){
    const classes = useStyles();
    const {amount, title, type} = props;
  console.log(title)
    //const [dense, setDense] = React.useState(false);
    // const [secondary, setSecondary] = React.useState(false);
    // icon && console.log(icon);

    return (
        
            <ListItem>
           
                <IconButton>
                    
                    <div
                        style={{
                            fontsize:'small',
                            backgroundColor: 'pink',
                            borderRadius: '50%',
                            color: 'black'
                        }} 
                    />
                  
                
                    
                    </IconButton>    
            
             
                <ListItemText
                  primary={title}
                  
                />
                <ListItem>
                  <IconButton edge="end" aria-label="amount">
                    {amount}
                  </IconButton>
                </ListItem>
              </ListItem>
          
            
        )
    
}

export default DashboardList;