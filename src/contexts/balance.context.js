import React, {createContext} from 'react';
import balanceReducer from '../reducer/balance.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';


const defaultBalance = {
    mainAccount: 2000,
    inc: 400,
    exp: 700
}
// const defaultBalance = [
    
//     {id: 2, name: "Spending Account", amount: 200},
//     {id: 3, name: "Father's day", amount: 50},
//     {id: 4, name: "Xmas saving", amount: 70}

// ];

export const BalanceContext = createContext();     
export const DispatchBalContext = createContext();

export function BalanceProvider(props){
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

}
