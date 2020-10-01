import React, {useContext} from 'react';
import {BalanceContext} from '../../contexts/balance.context';
import styles from '../../styles/BalanceStyles';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ExpTotal from '../expense/ExpTotal';
import IncTotal from '../income/IncTotal';

function BalanceShot(props){
    const {classes} = props;
    const balance = useContext(BalanceContext);
    return (
        <Grid container spacing={2} wrap='nowrap' style={{marginTop:"1rem"}}>
                <IncTotal />
                <Divider 
                    orientation="vertical" 
                    flexItem
                    style={{backgroundColor: "rgba(0,0,0, 0.3)"}}
                />
                <ExpTotal type="exp"/>
                
            </Grid>
    )
}

export default withStyles(styles)(BalanceShot);