import React, {createContext} from 'react';
import accountReducer from '../reducer/accounts.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';


const defaultAccounts = [
    
    {id: 2, name: "Spending Account", amount: 200},
    {id: 3, name: "Father's day", amount: 50},
    {id: 4, name: "Xmas saving", amount: 70}

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

