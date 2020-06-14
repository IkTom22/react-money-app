import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import MenuBar from './MenuBar';
import Balance from './Balance';
import AddAccount from './AddAccount';
import AccountList from './AccountList';
import {AccountsProvider} from './contexts/accounts.context';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
// import useStyles from './styles/BudgetAppStyles';

//style={{marginBottom: "2rem", marginTop: "2rem"}}
const useStyles= makeStyles((theme) => ({
  root: {
    height: "100vh",
    
  },
  grid: {
    gap: theme.spacing(2)
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
            
              <AccountsProvider>
                <Balance />
                <AddAccount />
                <AccountList />
              </AccountsProvider>
              
            </Grid>
          </Paper>
      </React.Fragment>
    )
}

export default BugdetApp;