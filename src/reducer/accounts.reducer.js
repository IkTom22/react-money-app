import { v4 as uuidv4 } from 'uuid';

const accountReducer = (state, action)=>{
    switch(action.type){
        case "ADD":
            return [...state, {id:uuidv4(), name: action.name, total: 0}];
        case "REMOVE":
            return state.filter(account => account.id !==action.id);
        case "EDIT":
            return state.map(account => 
                account.id === action.id ? {...account, total: action.newAmount} : account) 
                   
        default: 
            return state        
    }
}
export default accountReducer;
