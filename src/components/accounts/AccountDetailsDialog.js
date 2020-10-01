import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import Dialog from '@material-ui/core/Dialog';

//import {BalanceContext} from '../../contexts/balance.context';
import Grid from '@material-ui/core/Grid';
//import List from '@material-ui/core/List';
//import ListItemText from '@material-ui/core/ListItemText';
//import ListItem from '@material-ui/core/ListItem';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
//import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';

import red from '@material-ui/core/colors/red';
// import deepPurple from '@material-ui/core/colors/deepPurple';

//const buttonInc = cyan['A700'];


const pageExp = red['A400'];
const useStyles= makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    grid: {
      gap: theme.spacing(2),
    //   backgroundColor: moneyPrimary,
    },
    
    title:{
        fontSize:"1.5rem",
        fontWeight: 400
    },
    subTitle:{
        fontSize:"1rem",
        color: 'black'
    },
    details:{
        padding: 0,
        '& a':{
            textDecoration: "none"
            },
        }
    
  }))


  
function AccountDetailsDialog(props){
    console.log(props)
    const {id, handleClose, open, name, goal, total, exp} = props;
    const classes = useStyles();
    // const balance = useContext(BalanceContext);


     return (
        
            <Grid container  direction="column" alignItems="center" style={{height: '100vh', overflow: 'auto', backgroundColor: pageExp}}>
                <IconButton onClick={handleClose}  aria-label="go back" style={{position: 'fixed', right: '1rem', top: '3.5rem', color: "white"}}>
                    <ExitToAppTwoToneIcon />
                </IconButton> 
                <Paper elevation={3} style={{ marginTop: "3rem", width: "50%", padding: '0.5rem 0'}}>
                    <Grid 
                            style={{ textAlign: "center"}} 
                            container 
                            direction="column" 
                            spacing={2} 
                            wrap='nowrap' 
                            justify="center" 
                            alignItems="center"
                        >
                        
                        <div>
                            <div className={classes.subTitle}>
                                {name}
                            </div>

                            <div className={classes.title} >   
                                {`$ ${total}`}
                            </div>
                        </div>
                    </Grid>
                </Paper>
                <Grid container style={{ marginTop: "1.5rem", width: "90%" }} >
                    
                    <div> HI</div>    
                   
                </Grid>
                
            </Grid>
  
    )
}

export default AccountDetailsDialog;