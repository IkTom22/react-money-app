import React, {useContext, memo} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Account from './Account';
import MoneyPool from '../MoneyPool';
import {AccountsContext} from '../../contexts/accounts.context';
//import {BalanceContext} from '../contexts/balance.context';
import Grid from '@material-ui/core/Grid'

const AccountList = memo(()=>{
    const accounts = useContext(AccountsContext);
    // const mainBalance= useContext(BalanceContext);
    // const { remaining} = mainBalance;
    console.log(accounts);
    if(accounts.length)
        return (
            <Grid container justify='center' alignItems='center'>
                <MoneyPool />
                {accounts.map((account, i) => (
                    <React.Fragment key={i}>
                        <Paper style={{width:"90%" ,marginTop: "1rem"}}>
                        <List>
                            <Account {...account} key={account.id} />
                        </List>
                            
                        </Paper>
                    </React.Fragment>
                ))}
            </Grid>

        ); 
        return null
})
export default AccountList;