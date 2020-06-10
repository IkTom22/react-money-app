import React, {createContext} from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'
const defaultAccounts = [
    {id: 1, accountName: "Main Account"},
    {id: 2, accountName: "Spending Account"},
    {id: 3, accountName: "Father's day"},
    {id: 4, accountName: "Xmas saving"}

]

export const AccountsContext = createContext();
export const DispatchContext = createContext();

export function AccountsProvider(props){
    const [accounts, dispatch] = useLocalStorageReducer("accounts", defaultAccounts, accountReducer)
    return(
        <AccountsContext.Provider value={accounts}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </AccountsContext.Provider>

    )

}

