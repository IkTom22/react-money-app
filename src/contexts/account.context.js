import React, {createContext} from 'react';
import accountReducer from '../reducer/accounts.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';


const defaultAccount = 
    {
        id: 5,
        inc: [],
        exp:[],
        totalInc: 0,
        totalExp: 0,
        total: 0
    }




export const AccountContext = createContext();     
export const DispatchAccountContext = createContext();

export function AccountProvider(props){
    
    const [account, dispatch] = useLocalStorageReducer("account",  defaultAccount, accountReducer);
   
    return(
      
            <AccountContext.Provider value={account}>
                <DispatchAccountContext.Provider value={dispatch}>
                    {props.children}
                </DispatchAccountContext.Provider>
            </AccountContext.Provider>

    )

}