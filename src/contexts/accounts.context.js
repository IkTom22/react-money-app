import React, {createContext} from 'react';
import accountReducer from '../reducer/accounts.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
import {BalanceContext} from './balance.context';

const defaultAccounts = [
    
    // {id: 2, name: "Spending Account", total: 200},
    // {id: 3, name: "Father's day", total: 50},
    // {id: 4, name: "Xmas saving", total: 70},
    {
        id: 5,
        name: "Main Account",
        total: 0,
        expLists: [],
        exp: 0
    }

];


export const AccountsContext = createContext();     
export const DispatchContext = createContext();

export function AccountsProvider(props){
    
    const [accounts, dispatch] = useLocalStorageReducer("accounts",  defaultAccounts, accountReducer);
   
    return(
      
            <AccountsContext.Provider value={accounts}>
                <DispatchContext.Provider value={dispatch}>
                    {props.children}
                </DispatchContext.Provider>
            </AccountsContext.Provider>

    )

}

