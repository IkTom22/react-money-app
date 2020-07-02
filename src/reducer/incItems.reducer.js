


const incItemsReducer = (state, action)=>{
    console.log(state)
    const index = state.findIndex(e=> e.id === action.id )
    switch(action.type){
        
        case "ADD_TYPE":
            return state[index] 
                        ? [...state.slice(0, index),
                            {
                                ...state[index],  
                                title: action.title, 
                                icon: action.icon, 
                                backgroundColor: action.backgroundColor, 
                                button: !state.button },
                            ...state.slice(index +1)
                        ] 
                        : [...state,
                                {
                                    id: action.id, 
                                    title: action.title,
                                    icon: action.icon,
                                    backgroundColor: action.backgroundColor,
                                    button: !state.button
                                }
                        ] 
              
        case "ADD_DETAILS":     
            return  state.map(incItem => 
                incItem.id === action.id ? {...incItem, amount: parseFloat(action.amount), note: action.note } : incItem) 
        
        case "TOGGLE_BUTTON" :
            return  state.map(incItem =>
                incItem.id === action.id ? { ...incItem, button: !incItem.button} : incItem
                )      
        default:
            return state
                

   
    }
}
export default incItemsReducer;