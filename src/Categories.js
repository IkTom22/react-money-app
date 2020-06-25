import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import BudgetIcons from './BudgetIcons';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around'
        

    },
    categoryIcons: {
      width: '70px',
      height: '70px',
      display: 'flex',
      flexDirection: 'column',
      
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));



function Categories(props){
    const {accounts, incs, exps, savings} = BudgetIcons;
    const {type} = props
    const classes = useStyles();

        if(type==="inc" ){
            return(
                <Grid container justify='center' alignItems='center'>
                <List className={classes.root}>

                    {incs.map((inc, i)=> (
                     <ListItem className={classes.categoryIcons}>
                        <IconButton>
                            {inc.icon}    
                        </IconButton>
                        <ListItemText   secondary={inc.title} />  
                    </ListItem>
                    ))}
                </List>
                </Grid>
            ) }
           else if(type==="exp"){
                return(
                    <List>
                        {incs.map((exp, i)=> (
                        <React.Fragment key ={i}>
                            <Avatar>
                            {exp.icon}    
                            </Avatar>
                            <ListItemText   secondary={exp.title} />  
                        </React.Fragment>
                        ))}
                </List>
                ) }
            else if (type ==="savings"){
                return(
                    <List>
                        {incs.map((saving, i)=> (
                        <React.Fragment key ={i}>
                            <Avatar>
                            {saving.icon}    
                            </Avatar>
                            <ListItemText   secondary={saving.title} />  
                        </React.Fragment>
                        ))}
                </List>
                )}          
    
}
export default Categories;      