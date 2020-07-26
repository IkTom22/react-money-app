import React from 'react';
import AddAccount from './accounts/AddAccount';
import AddIncome from './income/AddIncome';
import Grid from '@material-ui/core/Grid'
import AddExpenses from './expense/AddExpenses';
// import {AccountsContext} from './contexts/accounts.context'

const ActionButtonHoler=() =>{
   
    return(
        <Grid container  justify="center" wrap='nowrap'>
            <AddIncome />
            <AddAccount />
            <AddExpenses />
        </Grid>
    )
}
export default ActionButtonHoler;