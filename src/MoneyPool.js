import React, {useContext, memo} from 'react';
import {BalanceContext} from './contexts/balance.context';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import cyan from '@material-ui/core/colors/cyan';
import TransferMoney from './TransferMoney';


const buttonColor = cyan['A100']
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    root: { 
        width:"70%",
        marginTop: "1rem", 
        padding: "1rem",
        fontSize:"1rem"
    },
    transfer: {
        
        width: "30px",
        height: "30px",
        minHeight: "25px",
        backgroundColor: buttonColor
    }
  }));

function MoneyPool(){
    const mainBalance= useContext(BalanceContext);
    const { remaining} = mainBalance;
    const classes = useStyles();
   
    return (
        <Paper className={classes.root}>
            <Grid container alignItems="center" justify="space-between">
                <div>Money Pool</div>
                <div>{`$ ${remaining} `}</div>
                <TransferMoney />
            </Grid>
            
        </Paper>
    )
}

export default MoneyPool;