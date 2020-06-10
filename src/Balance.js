import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/BalanceStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


function Balance(props){
    const {classes} = props;
    return(
        <Paper elevation={3} className={classes.root} style={{ marginTop: "2rem", width: "90%"}}>
            <h2 className={classes.title}>Balance: +$3000</h2>
            <Grid container spacing={2} wrap='nowrap'>
                <Grid item xs={6} justify='center' className={classes.details}>
                    <div className={classes.subTitle}>Income</div>
                    <div className={classes.title}>$500</div>
                </Grid>
                <Divider orientation="vertical" flexItem style={{backgroundColor: "rgba(0,0,0,1)"}}/>
                <Grid item xs={6} justify='center' className={classes.details}>
                    <div className={classes.subTitle}>Expense</div>
                    <div className={classes.title}>$100</div>
                </Grid>
            </Grid>

        </Paper>
    )
}
export default withStyles(styles)(Balance);