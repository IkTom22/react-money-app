

const accountsReducer = (state, action)=>{
    switch(action.type){
        case "ADD":
            return [...state, {id: action.id, name: action.name, total: action.amount ? Number(action.amount) : 0 , goal: Number(action.goal), toGo: action.amount ? Number(action.goal) - Number(action.amount) : Number(action.goal)}];
        case "REMOVE":
            return state.filter(account => account.id !==action.id);
        case "EDIT":
            return state.map(account => 
                account.id === action.id ? {...account, name: action.newName, goal: Number(action.newGoal), toGo: Number(action.newGoal)-Number(state.total) } : account)
        case "TRANSFER_IN": 
            return state.map (account => 
                account.id === action.id 
                ?  {...account, 
                    toGo: Number(account.goal)-(Number(account.total)+Number(action.amount)), 
                    total: Number(account.total) +Number(action.amount) 
                } : account     
            )  
        case "TRANSFER_OUT":
            return state.map(account => 
                account.id === action.id 
                ? {...account, 
                    toGo: Number(account.goal)+ (Number(account.total)- Number(action.amount)), 
                    total: Number(account.total) - Number(action.amount)
                }  : account 
               
            )
        case "SPENT":
            return state.map(account =>
                account.id === action.accountId
                ? {...account,
                    exp: Number(account.exp) + Number(action.amount),
                    total: Number(account.total) - Number(action.amount),
                    toGo:  account.goal !== 0 && Number(account.toGo) + Number(action.amount)} 
                : account)
        default: 
            return state        
    }
}
export default accountsReducer;
