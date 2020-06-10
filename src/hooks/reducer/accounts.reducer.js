import uuid from 'uuid/v4';

const reducer = (state, action){
    switch(action.type){
        case "ADD":
            return [...state, {id:uuid(), name: action.name, amount: action.amount}];
        case "REMOVE":
            return state.filter(account => account.id !==action.id);
        case "EDIT":
            return state.map(account => 
                account.id === action.id ? {...account, amount: action.newAmount} : account)    
        default: 
            return state        
    }
}
export default reducer;
