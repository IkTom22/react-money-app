import { v4 as uuidv4 } from 'uuid';

const balanceReducer = (state, action)=>{
 switch(action.type){
    case "Edit_BALANCE":
         return {...state, mainAccount: action.mainAccount}
    case "ADD_INC":
        return {...state, mainAccount: parseFloat(state.mainAccount) + action.inc, inc: parseFloat(state.inc) + action.inc}
    case "MINUS_EXP":
        return {...state, mainAccount: parseFloat(state.mainAccount) - action.exp, inc: parseFloat(state.exp) + action.exp}
    default: 
        return state
 }
}
export default balanceReducer;
// const accountReducer = (state, action)=>{
//     switch(action.type){
//         case "ADD":
//             return [...state, {id:uuidv4(), name: action.name, amount: 0}];
//         case "REMOVE":
//             return state.filter(account => account.id !==action.id);
//         case "EDIT":
//             return state.map(account => 
//                 account.id === action.id ? {...account, amount: action.newAmount} : account) 
                   
//         default: 
//             return state        
//     }
// }
// export default accountReducer;