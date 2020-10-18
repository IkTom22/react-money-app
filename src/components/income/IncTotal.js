import React, {useContext} from 'react';
import {incItemsContext} from '../../contexts/inc/incItems.context';
import{sortByMonth} from '../../helper/datePicker';
import {sumTotal} from '../../helper/filterAmount';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from '../../styles/BalanceStyles';
import Grid from '@material-ui/core/Grid';
import DashboardDialogs from '../../page/DashboardDialogs';
import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });

function IncTotal(props){
    const {classes, currentMonth} = props;

    const incItems = useContext(incItemsContext);

    const [open, setOpen] = React.useState(false);
    let sortIncByMonth = sortByMonth(incItems, currentMonth);
    let incMonthlyTotal = sumTotal(sortIncByMonth);

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
                <Button onClick={handleClickOpen} className={classes.title} color='primary'>${incMonthlyTotal}</Button>
               
            </Grid>
            <DashboardDialogs 
              type='inc' 
              incMonthlyTotal ={incMonthlyTotal}
              transition={Transition} 
              handleClose={handleClose} 
              open={open}
              />
        </React.Fragment>
        
    )
}
export default withStyles(styles)(IncTotal);