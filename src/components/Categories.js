import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';

import BudgetIcons from '../BudgetIcons';

import useInputState from '../hooks/useInputState';
import {DispatchIncsContext} from '../contexts/inc/incItems.context';

import {DispatchExpsContext} from '../contexts/exp/expItems.context';
import red from '@material-ui/core/colors/red';
import deepPurple from '@material-ui/core/colors/deepPurple';


const buttonInc = deepPurple['A200'];
const buttonExp = red['A400'];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around'
        
    },
    mainTitle: {
      color:"#989898"
    },
    categoryIcons: {
      width: '80px',
    //   height: '70px',
      display: 'flex',
      paddingLeft: '12px',
      paddingRight: '12px', 
      flexDirection: 'column',
      textAlign: 'center'
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    categoryButtons: {
        padding: "5px 5px 0 5px",
        width: '60px',
        height:'60px',
        // color: '#ff8a80', 
        color: buttonInc,
        '& > *': {          
            // padding: '4px',
            '& >*':{
                 padding: "5px"
            } 
        }
    },
    subTitle:{
        fontSize: "1.2rem"
    }
  }));
 

function Categories(props){
    const { incs, exps, savings} = BudgetIcons;
    const [values, handleChange] = useInputState("");
    const dispatchIncs = useContext(DispatchIncsContext);
    const dispatchExps = useContext(DispatchExpsContext);

    const {type,  id} = props;
    const classes = useStyles();
    
   
    
    
        if(type==="inc"){
            
            return(
                <Grid container justify='center' alignItems='center' style={{paddingBottom: 0, marginBottom: 0
                }}>
                    <div className={classes.mainTitle}> Pick an category</div>
                    <List className={classes.root} >
                    
                        {incs.map((inc, i)=> (
                        <ListItem className={classes.categoryIcons} key={i} >
                            <IconButton 
                                values={ values.icon}
                                className={classes.categoryButtons}
                                
                                onClick={ e=>{ 
                                    
                                    dispatchIncs({
                                        type: "ADD_TYPE",
                                        icon: inc.icon,
                                        title: inc.title, 
                                        id: id,
                                        backgroundColor: inc.backgroundColor
                                        })
                                }}
                                
                            >
                                {<inc.icon  key={inc.title} fontSize= "large"/>}
                            </IconButton>
                            <ListItemText secondary={inc.title} className={classes.subTitle} />  
                        </ListItem>
                        ))}
                    </List>
                </Grid>
            ) }
           else if(type==="exp"){

            return(
            <Grid container justify='center' alignItems='center' >
            <List className={classes.root} >
            
                {exps.map((exp, i)=> (
                <ListItem className={classes.categoryIcons} key={i} >
                    <IconButton 
                        values={ values.icon}
                        className={classes.categoryButtons}
                        style={{color: buttonExp}}
                        onClick={ e=>{ 
                            
                            dispatchExps({
                                type: "ADD_TYPE",
                                icon: exp.icon,
                                title: exp.title, 
                                id: id,
                                backgroundColor: exp.backgroundColor
                                })
                        }}
                        
                    >
                        {<exp.icon  key={exp.title} fontSize= "large"/>}
                    </IconButton>
                    <ListItemText secondary={exp.title} className={classes.subTitle} />  
                </ListItem>
                ))}
            </List>
        </Grid>
            )
                    }
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