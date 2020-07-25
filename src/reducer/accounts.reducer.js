

const accountsReducer = (state, action)=>{
    switch(action.type){
        case "ADD":
            return [...state, {id: action.id, name: action.name, total: 0}];
        case "REMOVE":
            return state.filter(account => account.id !==action.id);
        case "EDIT":
            return state.map(account => 
                account.id === action.id ? {...account, total: parseFloat(action.newAmount)} : account)
        case "TRANSFER_IN": 
            return state.map (account => 
                account.id === action.id ?  {...account, total: parseFloat(account.total) + parseFloat(action.amount)}: account
            )  
        case "TRANSFER_OUT":
            return state.map(account => 
                account.id === action.id ? {...account, total: parseFloat(account.total) - parseFloat(action.amount)} : account 
            )       
        default: 
            return state        
    }
}
export default accountsReducer;
