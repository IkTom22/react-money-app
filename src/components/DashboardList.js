import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
// import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
// import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
// import { Grid } from '@material-ui/core';
// import DashboardLists from './DashboardLists';
import BudgetIcons from '../BudgetIcons';

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
        height: '50px',
        width: '50px',
        
        '& > *': {
          transform: 'scale(1.2)',
          padding: '4px',
          
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
    const {incs, exps} = BudgetIcons;
    const indexIncIcon = incs.findIndex(e => e.title === title);
    const indexExpIcon = exps.findIndex(e => e.title === title);
    let pickedIncIcon = incs[indexIncIcon];
    let pickedExpIcon = exps[indexExpIcon];

    //const [dense, setDense] = React.useState(false);
    
    // const [secondary, setSecondary] = React.useState(false);
    // icon && console.log(icon);

    return (
        
            <ListItem >
           
                <IconButton className={classes.picked}>
                    {type ==="exp" &&
                      <pickedExpIcon.icon
                          style={{
                              fontsize:'large',
                              backgroundColor: pickedExpIcon.backgroundColor,
                              borderRadius: '50%',
                              color: 'white',
                              marginRight: '1rem',
                              padding: '2px'
                          }} 
                    />}
                    {type==="inc" &&
                      <pickedIncIcon.icon
                          style={{
                              fontsize:'small',
                              backgroundColor: pickedIncIcon.backgroundColor,
                              borderRadius: '50%',
                              color: 'black',
                              marginRight: '1rem'
                          }} 
                      />}  
                    </IconButton>    
            
             
                <ListItemText
                  primary={title}
                  
                />
                <ListItem>
                  <IconButton style={{marginLeft: 'auto'}} aria-label="amount" >
                    <div style={{fontSize: '1.2rem'}}>{`$ ${amount}`}</div>
                  </IconButton>
                </ListItem>
              </ListItem>
          
            
        )
    
}

export default DashboardList;