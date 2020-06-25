
const incItemsReducer = (state, action)=>{
    switch(action.type){
        case "ADD_DETAILS":
            return [...state, {id: action.id, amount: parseFloat(action.amount), category: action.category,  note: action.note}]
        default:
            return state
    }
}
export default incItemsReducer;