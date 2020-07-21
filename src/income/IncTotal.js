import React, {useContext} from 'react';
import {BalanceContext} from '../contexts/balance.context';
import {incItemsContext} from '../contexts/inc/incItems.context';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from '../styles/BalanceStyles';
import Grid from '@material-ui/core/Grid';
import DashboardDialogs from '../DashboardDialogs';
import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function IncTotal(props){
    const {classes} = props;
    const balance = useContext(BalanceContext);
    const incItems = useContext(incItemsContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <React.Fragment>
            <Grid item xs={6}  className={classes.details}>
               
                <div className={classes.subTitle}>Income</div>
                <Button onClick={handleClickOpen} className={classes.title} color='primary'>${balance.inc}</Button>
               
            </Grid>
            <DashboardDialogs type='inc' handleClose={handleClose} open={open}/>
        </React.Fragment>
        
    )
}
export default withStyles(styles)(IncTotal);