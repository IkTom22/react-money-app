import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { v4 as uuidv4 } from 'uuid';

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
import { textAlign } from '@material-ui/system';
import useInputState from './hooks/useInputState';
import {DispatchIncsContext} from './contexts/inc/incItems.context';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around'
    },
    categoryIcons: {
      width: '80px',
    //   height: '70px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    categoryButtons: {
        padding: "5px 5px 0 5px",
        '& > *': {
            fontSize: "medium",
            
            padding: '4px',
            '& >*':{
                // color: "white",
                transform: 'scale(1.3)',
                borderRadius: "50%",
                padding: "5px"
               
            }
           
            
        }
    },
    subTitle:{
        fontSize: "1.2rem"
    }
  }));

 
function Categories(props){
    const {accounts, incs, exps, savings} = BudgetIcons;
    const [values, handleChange] = useInputState("");
    const dispatchIncs = useContext(DispatchIncsContext);
    const {type, category, id} = props;
    const classes = useStyles();

    
    
        if(type==="inc"){
            
            return(
                <Grid container justify='center' alignItems='center' >
                    <List className={classes.root} >

                        {incs.map((inc, i)=> (
                        <ListItem className={classes.categoryIcons} key={i} >
                            <IconButton 
                                values={ values.iconName}
                                className={classes.categoryButtons}  
                                onClick={ e=>{
     
                                    dispatchIncs({
                                        type: "ADD_TYPE",
                                        iconName: inc.iconName,
                                        title: inc.title, 
                                        id: id
                                        })
                                    console.log(values.iconName)
                                }}
                                
                            >
                                {<inc.icon   fontSize="large"  key={inc.title}/>}
                            </IconButton>
                            <ListItemText secondary={inc.title} className={classes.subTitle}/>  
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