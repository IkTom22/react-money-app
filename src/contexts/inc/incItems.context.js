import React, {createContext} from 'react';
import {useLocalStorageReducer} from '../../hooks/useLocalStorageReducer';
import incItemsReducer from '../../reducer/incItems.reducer';
import { v4 as uuidv4 } from 'uuid';


const defaultIncItems = [
    {id: uuidv4(), amount: 0, category: "", note: "" }
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