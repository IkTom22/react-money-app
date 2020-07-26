

const accountsReducer = (state, action)=>{
    switch(action.type){
        case "ADD":
            return [...state, {id: action.id, name: action.name, total: action.amount ? action.amount : 0 , goal: action.goal, toGo: action.amount ? parseFloat(action.goal)-parseFloat(action.amount) : action.goal}];
        case "REMOVE":
            return state.filter(account => account.id !==action.id);
        case "EDIT":
            return state.map(account => 
                account.id === action.id ? {...account, name: action.newName, goal: action.newGoal, toGo: parseFloat(action.newGoal)-parseFloat(state.total) } : account)
        case "TRANSFER_IN": 
            return state.map (account => 
                account.id === action.id 
                ?  {...account, 
                    toGo: parseFloat(account.goal)-(parseFloat(account.total)+parseFloat(action.amount)), 
                    total: parseFloat(account.total) + parseFloat(action.amount) }
                    : account
            )  
        case "TRANSFER_OUT":
            return state.map(account => 
                account.id === action.id 
                ? {...account, 
                    toGo: parseFloat(account.goal)+ (parseFloat(account.total)-parseFloat(action.amount)), 
                    total: parseFloat(account.total) - parseFloat(action.amount)} 
                    : account 
            )       
        default: 
            return state        
    }
}
export default accountsReducer;
