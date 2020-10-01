import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import MenuBar from '../components/MenuBar';
import BalancePage from '../components/balance/BalancePage';
import ActionButtonHoler from '../components/ActionButtonsHolder';
import AccountList from '../components/accounts/AccountList';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import yellow from '@material-ui/core/colors/yellow';


const moneyPrimary = yellow[400];
const useStyles= makeStyles((theme) => ({
  root: {
    height: "auto",
    backgroundColor: moneyPrimary,
    height: '100vh'
    
  },
  grid: {
    gap: theme.spacing(2),
    backgroundColor: moneyPrimary,
  },
  
}))
function BugdetApp (props){
   const classes = useStyles();
   
    return (
        <React.Fragment>
          <CssBaseline />

          <Paper className={classes.root} elevation={0}>
            <Grid container justify='center' direction='column' alignItems='center' className={classes.grid} maxwidth="m">
              <MenuBar />
              <BalancePage />
              <ActionButtonHoler />
              <AccountList />
            </Grid>
          </Paper>
      </React.Fragment>
    )
}

export default BugdetApp;