import React, {createContext} from 'react';
import {useLocalStorageReducer} from '../../hooks/useLocalStorageReducer';
import incItemsReducer from '../../reducer/incItems.reducer';



const defaultIncItems = [
    {
        accountId: "", 
        id: "", 
        amount: 0, 
        title: "", note: "", 
        icon: {}, 
        selectedDate: new Date(), 
        calenderFocused: false, 
        month: '',
        year: ''
    }
]

export const incItemsContext = createContext();
export const DispatchIncsContext = createContext();



export function IncItemsProvider(props) {
    const [incItems, dispatchIncs] = useLocalStorageReducer("incItems", defaultIncItems, incItemsReducer);
    
    return(
        <incItemsContext.Provider value={incItems}>
            <DispatchIncsContext.Provider value={dispatchIncs}>
                {props.children}
            </DispatchIncsContext.Provider>
        </incItemsContext.Provider> 
    )
}