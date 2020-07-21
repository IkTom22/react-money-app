import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import {BalanceContext} from '../contexts/balance.context';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';

import Details from '../DashboardDialogs';

const useStyles= makeStyles((theme) => ({
    root: {
      height: "auto",
    //   backgroundColor: moneyPrimary,
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
function ExpDashboard(props){
    const {type} = props;
    const classes = useStyles();
    const balance = useContext(BalanceContext);
    console.log(type)
    
    return (
      
        <Grid container justify='center'>
       
            <Paper elevation={3} style={{ marginTop: "2rem", width: "90%"}}>
                <List>
                
                    <Grid 
                        style={{ textAlign: "center", marginTop:"1rem"}} 
                        container direction="column" 
                        spacing={2} 
                        wrap='nowrap' 
                        justify="center" 
                        alignItems="center"
                    >
                        <div className={classes.subTitle}>
                        {type === "exp" && 'Expenses'}
                        </div>
                        
                        <div className={classes.title} >   
                            { `$ ${balance.exp}`} 
                        </div>
                        
                    </Grid>
                    
                </List>
            

            </Paper>
            <Details />
        </Grid>
    )
}

export default ExpDashboard;
