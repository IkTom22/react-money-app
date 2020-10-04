

const balanceReducer = (state, action)=>{
 switch(action.type){
    case "Edit_BALANCE":
        if(state.remaining === 0 && state.mainAccount === 0) {
            return {...state, mainAccount: Number(action.mainAccount), remaining: Number(action.mainAccount)}
        } else {
            return {...state, mainAccount: Number(action.mainAccount), remaining: Number(state.remaining) + (Number(action.mainAccount)-Number(state.mainAccount))}
        }     

    case "ADD_INC":
        return {
                ...state, 
                mainAccount: Number(state.mainAccount) + Number(action.inc), 
                inc: Number(state.inc) + Number(action.inc),
                remaining: Number(state.remaining) + Number(action.inc)
                    
                }
    case "MINUS_EXP":
        return {...state, mainAccount: Number(state.mainAccount) - Number(action.exp), exp: Number(state.exp) + Number(action.exp)}
    
    case "TRANSFER_OUT":
        return {...state, remaining: Number(state.remaining) - Number(action.amount)}            
    
    case "TRANSFER_IN":
        return {...state, remaining: Number(state.remaining) + Number(action.amount)}        
    default: 
        return state
 }
}
export default balanceReducer;
