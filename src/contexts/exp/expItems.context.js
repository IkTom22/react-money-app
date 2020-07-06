import React, {createContext} from 'react';
import {useLocalStorageReducer} from '../../hooks/useLocalStorageReducer';
import accountItemsReducer from '../../reducer/accountItems.reducer';



const defaultExpItems = [
    {
        accountId: "", 
        id: "", 
        amount: 0, 
        title: "", 
        note: "", 
        icon: {}, 
        button: false
    }
]

export const expItemsContext = createContext();
export const DispatchExpsContext = createContext();



export function ExpItemsProvider(props) {
    const [expItems, dispatchExps] = useLocalStorageReducer("expItems", defaultExpItems, accountItemsReducer);
    
    return(
        <expItemsContext.Provider value={expItems}>
            <DispatchExpsContext.Provider value={dispatchExps}>
                {props.children}
            </DispatchExpsContext.Provider>
        </expItemsContext.Provider> 
    )
}