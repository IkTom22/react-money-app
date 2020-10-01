import React, {useContext, memo} from 'react';
import Balance from './Balance';
import {withStyles} from '@material-ui/core/styles';
import {BalanceContext} from '../../contexts/balance.context';
import styles from '../../styles/BlancePageStyles';
import Paper from '@material-ui/core/Paper';
import BalanceShot from './BalanceShot';



const BalancePage =memo((props)=>{
    const {classes} = props;
    const balance = useContext(BalanceContext);
     console.log(balance)
    return(
        <Paper elevation={3} className={classes.root} style={{ marginTop: "2rem", width: "90%"}}>
            
            <Balance />
            <BalanceShot />

        </Paper>
    )
})
export default withStyles(styles)(BalancePage);
