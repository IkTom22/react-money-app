

const balanceReducer = (state, action)=>{
 switch(action.type){
    case "Edit_BALANCE":
        if(state.remaining === 0 && state.mainAccount === 0) {
            return {...state, mainAccount: parseFloat(action.mainAccount), remaining: parseFloat(action.mainAccount)}
        } else {
            return {...state, mainAccount: parseFloat(action.mainAccount), remaining: parseFloat(action.mainAccount + (action.mainAccount-state.mainAccount))}
        }     

    case "ADD_INC":
        return {
                ...state, 
                mainAccount: parseFloat(state.mainAccount) + parseFloat(action.inc), 
                inc: parseFloat(state.inc) + parseFloat(action.inc),
                remaining: parseFloat(state.remaining) + parseFloat(action.inc)
                    
                }
    case "MINUS_EXP":
        return {...state, mainAccount: parseFloat(state.mainAccount) - parseFloat(action.exp), exp: parseFloat(state.exp) + parseFloat(action.exp)}
    
    case "TRANSFER_OUT":
        return {...state, remaining: parseFloat(state.remaining) - parseFloat(action.amount)}            
    
    case "TRANSFER_IN":
        return {...state, remaining: parseFloat(state.remaining) + parseFloat(action.amount)}        
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