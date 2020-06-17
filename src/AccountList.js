import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Account from './Account';
import {AccountsContext} from './contexts/accounts.context';
import Grid from '@material-ui/core/Grid'

function AccountList(){
    const accounts = useContext(AccountsContext);
    console.log(accounts);
    if(accounts.length)
        return (
            <Grid container justify='center' alignItems='center'>
                {accounts.map((account, i) => (
                    <React.Fragment key={i}>
                        <Paper style={{width:"90%" ,marginTop: "1rem"}}>
                        <List>
                            <Account {...account} key={account.id}/>
                        </List>
                            
                        </Paper>
                    </React.Fragment>
                ))}
            </Grid>

        ); 
        return null
}
export default AccountList;