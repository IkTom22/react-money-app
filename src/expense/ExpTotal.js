import React, {useContext} from 'react';
import {BalanceContext} from '../contexts/balance.context';
import { withStyles } from '@material-ui/core';
import styles from '../styles/BalanceStyles';
import Grid from '@material-ui/core/Grid';

function ExpTotal(props){
    const {classes} = props;
    const balance = useContext(BalanceContext);
    return(
        <Grid item xs={6}  className={classes.details}>
            <div className={classes.subTitle}>Expense</div>
            <div className={classes.title}>${balance.exp}</div>
        </Grid>
    )
}
export default withStyles(styles)(ExpTotal);