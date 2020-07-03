import React, {useContext} from 'react';
import AddAccount from './accounts/AddAccount';
import AddIncome from './income/AddIncome';
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles';
import AddExpenses from './expense/AddExpenses';
import {AccountsContext} from './contexts/accounts.context'

function ActionButtonHoler(){
    const accounts = useContext(AccountsContext);
    console.log(accounts)
    return(
        <Grid container  justify="center" wrap='nowrap'>
            {accounts && <AddIncome />}
            <AddAccount />
            {accounts && <AddExpenses />}
        </Grid>
    )
}
export default ActionButtonHoler;