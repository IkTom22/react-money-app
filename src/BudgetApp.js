import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import MenuBar from './MenuBar';
import BalancePage from './balance/BalancePage';
import ActionButtonHoler from './ActionButtonsHolder';
import AccountList from './accounts/AccountList';
import {AccountsProvider} from './contexts/accounts.context';
import {BalanceProvider} from './contexts/balance.context';
import {IncItemsProvider} from './contexts/inc/incItems.context';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import yellow from '@material-ui/core/colors/yellow';
// import useStyles from './styles/BudgetAppStyles';

//style={{marginBottom: "2rem", marginTop: "2rem"}}
const moneyPrimary = yellow[400];
const useStyles= makeStyles((theme) => ({
  root: {
    height: "auto",
    backgroundColor: moneyPrimary,
    height: '100vh'
    
  },
  grid: {
    gap: theme.spacing(2),
    
    
  }
}))
function BugdetApp (props){
   const classes = useStyles();
   
    return (
        <React.Fragment>
          <CssBaseline />

          <Paper className={classes.root} elevation={0}>
          <Grid container justify='center' direction='column' alignItems='center' className={classes.grid} maxwidth="m">
            <MenuBar />
              <BalanceProvider>
                <IncItemsProvider>
                  <AccountsProvider>
                    <BalancePage />
                    <ActionButtonHoler />
                    <AccountList />
                  </AccountsProvider>
                </IncItemsProvider>
              </BalanceProvider>
            </Grid>
          </Paper>
      </React.Fragment>
    )
}

export default BugdetApp;