import React, {createContext} from 'react';
import accountReducer from '../reducer/accounts.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
import { v4 as uuidv4 } from 'uuid';
const defaultAccounts = [

    {
        id: uuidv4(),
        name: "Main Account",
        funds: 0,
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

