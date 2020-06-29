import { InctypeContext } from "../contexts/incType.context";
import { incItemsContext } from "../contexts/inc/incItems.context";

const incItemsReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TYPE":
            return [...state,   
                    {
                        id: action.id, 
                         
                        title: action.title,
                        note: action.note,
                        iconName: action.iconName
                    }
                ]
        case "ADD_DETAILS":     
            return state.map(incItem => 
                incItem.id === action.id ? {...incItem, amount: parseFloat(action.amount),note: action.note } : incItem) 
            default:
            return state
    }
}
export default incItemsReducer;