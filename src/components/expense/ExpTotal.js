import React, {useContext} from 'react';
import  {expItemsContext} from '../../contexts/exp/expItems.context';
import{sortByMonth} from '../../helper/datePicker';
import {sumTotal} from '../../helper/filterAmount';
import { withStyles } from '@material-ui/core';
import styles from '../../styles/BalanceStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DashboardDialogs from '../../page/DashboardDialogs';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="left" ref={ref} {...props} />;
      });
      

function ExpTotal(props){
    const {classes, currentMonth} = props;
    const expItems = useContext(expItemsContext);
    const [open, setOpen] = React.useState(false);

    let sortExpByMonth = sortByMonth(expItems, currentMonth);
    let expMonthlyTotal = sumTotal(sortExpByMonth);
  

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
                    <Button onClick={handleClickOpen} className={classes.title}  color="secondary">${expMonthlyTotal}</Button>
               
            </Grid>
            <DashboardDialogs 
              type='exp' 
              expMonthlyTotal ={expMonthlyTotal}
              transition={Transition} 
              handleClose={handleClose} 
              open={open}
            />
        </React.Fragment>
    )
}
export default withStyles(styles)(ExpTotal);