import React, {useContext} from 'react';
import {BalanceContext} from '../contexts/balance.context';
import {incItemsContext} from '../contexts/inc/incItems.context';
import { withStyles } from '@material-ui/core';
import styles from '../styles/BalanceStyles';
import Grid from '@material-ui/core/Grid';

function IncTotal(props){
    const {classes} = props;
    const balance = useContext(BalanceContext);
    const incItems = useContext(incItemsContext);
    console.log(incItems)
    return(
        <Grid item xs={6} className={classes.details}>
            <div className={classes.subTitle}>Income</div>
            <div className={classes.title}>${balance.inc}</div>
        </Grid>
    )
}
export default withStyles(styles)(IncTotal);