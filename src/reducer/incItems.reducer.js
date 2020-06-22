
const incItemsReducer = (state, action)=>{
    switch(action.type){
        case "ADD_DETAILS":
            return [...state, {id: action.id, amount: action.inc, category: action.category}]
        default:
            return state
    }
}
export default incItemsReducer;