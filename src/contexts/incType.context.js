// import React, {createContext} from 'react';
// import balanceReducer from '../reducer/balance.reducer';
// import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
// import CardGiftcardTwoToneIcon from '@material-ui/icons/CardGiftcardTwoTone';
// import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone';
// import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
// import MoneyTwoToneIcon from '@material-ui/icons/MoneyTwoTone';
// const defaultIncType = [
//     {icon: MonetizationOnOutlinedIcon , title: "allowance", iconName: "MonetizationOnOutlinedIcon" }
// ]


// export const InctypeContext = createContext();     
// export const DispatchIncTypeContext = createContext();

// export function InctypeProvider(props){
//     //  const [balance, setBalance] = useState(defaultBalance)
//     const [IncType, dispatch] = useLocalStorageReducer("IncType", defaultIncType, IncTypeReducer);
    

//     return(
      
//             <IncTypeContext.Provider value={IncCategories}>
//                 <DispatchIncTypeContext.Provider value={dispatch}>
//                     {props.children}
//                 </DispatchIncTypeContext.Provider>
//             </IncTypeContext.Provider>

//     )

// }
