import React, {createContext} from 'react';
import {useLocalStorageReducer} from '../../hooks/useLocalStorageReducer';
import expItemsReducer from '../../reducer/expItems.reducer';



const defaultExpItems = [
    {
        accountId: "", 
        id: "", 
        amount: 0, 
        title: "", 
        note: "", 
        icon: {}, 
        selectedDate: new Date(),
        calenderFocused: false,
        month: '',
        year: ''
    }
]

export const expItemsContext = createContext();
export const DispatchExpsContext = createContext();



export function ExpItemsProvider(props) {
    const [expItems, dispatchExps] = useLocalStorageReducer("expItems", defaultExpItems, expItemsReducer);
    
    return(
        <expItemsContext.Provider value={expItems}>
            <DispatchExpsContext.Provider value={dispatchExps}>
                {props.children}
            </DispatchExpsContext.Provider>
        </expItemsContext.Provider> 
    )
}