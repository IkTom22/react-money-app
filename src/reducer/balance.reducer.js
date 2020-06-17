import { v4 as uuidv4 } from 'uuid';

const balanceReducer = (state, action)=>{
 switch(action.type){
     case "ADD_INC":
         return {...state, mainAccount: state.mainAccount + action.income, inc: state.inc + action.income}
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