import React, {createContext} from 'react';
import accountsReducer from '../reducer/accounts.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
import { v4 as uuidv4 } from 'uuid';
    
const defaultAccounts = [

    {
        id: uuidv4(),
        name: "Spending Account",
        goal: 0,
        total: 0,
        exp: 0
    }

];


export const AccountsContext = createContext();     
export const DispatchContext = createContext();

export function AccountsProvider(props){
    
    const [accounts, dispatchAccounts] = useLocalStorageReducer("accounts",  defaultAccounts, accountsReducer);
   
    return(
      
            <AccountsContext.Provider value={accounts}>
                <DispatchContext.Provider value={dispatchAccounts}>
                    {props.children}
                </DispatchContext.Provider>
            </AccountsContext.Provider>

    )

}

