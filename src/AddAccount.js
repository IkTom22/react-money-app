import React, {useContext} from 'react';
import Fab from '@material-ui/core/Fab';
import {DispatchContext} from './contexts/accounts.context';
import Paper from '@material-ui/core/Paper';


import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
// import styles from './styles/AddAccountStyles';
// import withStyles from '@material-ui/core/withStyles';

function AddAccount(){
    const accounts = useContext(DispatchContext)
    return (
        
            <Fab aria-label="add an wallet" color="secondary" style={{marginTop: "2rem"}}>
                <AccountBalanceWalletTwoToneIcon />
            </Fab>
       
        
    )
}

export default AddAccount;