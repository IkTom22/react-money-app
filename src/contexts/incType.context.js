import React, {createContext} from 'react';
import balanceReducer from '../reducer/balance.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
import CardGiftcardTwoToneIcon from '@material-ui/icons/CardGiftcardTwoTone';
import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import MoneyTwoToneIcon from '@material-ui/icons/MoneyTwoTone';
const defaultIncType = [
    {id: "Salary", icon: MoneyTwoToneIcon }
]


export const InctypeContext = createContext();     
export const DispatchIncTypeContext = createContext();

export function InctypeProvider(props){
    //  const [balance, setBalance] = useState(defaultBalance)
    const [IncType, dispatch] = useLocalStorageReducer("IncCategories", defaultIncType, IncTypeReducer);
    console.log(IncCategories)

    return(
      
            <IncTypeContext.Provider value={IncCategories}>
                <DispatchIncTypeContext.Provider value={dispatch}>
                    {props.children}
                </DispatchIncTypeContext.Provider>
            </IncTypeContext.Provider>

    )

}
