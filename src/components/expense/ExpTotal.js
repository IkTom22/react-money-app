import React, {useContext} from 'react';
import {BalanceContext} from '../../contexts/balance.context';
import { withStyles } from '@material-ui/core';
import styles from '../../styles/BalanceStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DashboardDialogs from '../../page/DashboardDialogs';
import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      

function ExpTotal(props){
    const {classes, type} = props;
    const balance = useContext(BalanceContext);
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
               
                    <div className={classes.subTitle}>Expense</div>
                    <Button onClick={handleClickOpen} className={classes.title}  color="secondary">${balance.exp}</Button>
               
            </Grid>
            <DashboardDialogs type='exp' handleClose={handleClose} open={open}/>
        </React.Fragment>
    )
}
export default withStyles(styles)(ExpTotal);