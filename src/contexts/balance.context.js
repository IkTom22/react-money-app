import React, {createContext, memo} from 'react';
import balanceReducer from '../reducer/balance.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';


const defaultBalance = {
    mainAccount: 0,
    inc: 0,
    exp: 0
}


export const BalanceContext = createContext();     
export const DispatchBalContext = createContext();

export const BalanceProvider=memo((props)=>{
    //  const [balance, setBalance] = useState(defaultBalance)
    const [mainBalance, dispatch] = useLocalStorageReducer("mainBalance", defaultBalance, balanceReducer);
    console.log(mainBalance)

    return(
      
            <BalanceContext.Provider value={mainBalance}>
                <DispatchBalContext.Provider value={dispatch}>
                    {props.children}
                </DispatchBalContext.Provider>
            </BalanceContext.Provider>

    )

})
