

const balanceReducer = (state, action)=>{
 switch(action.type){
    case "Edit_BALANCE":
        if(state.remaining === 0 && state.mainAccount === 0) {
            return {...state, mainAccount: (Number(action.mainAccount)).toFixed(2), remaining: (Number(action.mainAccount)).toFixed(2)}
        } else {
            return {...state, mainAccount: (Number(action.mainAccount)).toFixed(2), remaining: (Number(state.remaining) + (Number(action.mainAccount)-Number(state.mainAccount))).toFixed(2)}
        }     

    case "ADD_INC":
        return {
                ...state, 
                mainAccount: (Number(state.mainAccount) + Number(action.inc)).toFixed(2), 
                inc: (Number(state.inc) + Number(action.inc)).toFixed(2),
                remaining: (Number(state.remaining) + Number(action.inc)).toFixed(2)
        }
       case "ADD_INC_INFO_ONLY" :
        return {
            ...state, 
            mainAccount: (Number(state.mainAccount) + Number(action.inc)).toFixed(2), 
            inc: (Number(state.inc) + Number(action.inc)).toFixed(2)
        } 
    case "MINUS_EXP":
        return {...state, mainAccount: (Number(state.mainAccount) - Number(action.exp)).toFixed(2), exp: (Number(state.exp) + Number(action.exp)).toFixed(2)}
    
    case "TRANSFER_OUT":
        return {...state, remaining: (Number(state.remaining) - Number(action.amount)).toFixed(2)}            
    
    case "TRANSFER_IN":
        return {...state, remaining: (Number(state.remaining) + Number(action.amount)).toFixed(2)}        
    default: 
        return state
 }
}
export default balanceReducer;
