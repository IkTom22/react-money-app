import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';

const expItemsReducer = (state, action)=>{
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
                                // selectedDate: action.selectedDate,
                                // month: action.month
                            },
                            ...state.slice(index +1)
                        ] 
                        : [...state,
                                {
                                    id: action.id, 
                                    accountId: action.accountId,
                                    title: action.title,
                                    icon: action.icon,
                                    backgroundColor: action.backgroundColor,
                                    // selectedDate: action.selectedDate,
                                    // month: action.month
                                }
                        ] 
              
        case "ADD_DETAILS":     
            return state[index] 
            ?  [...state.slice(0, index),
                {
                    ...state[index],  
                    amount: Number(action.amount), 
                    note: action.note, 
                    selectedDate: action.selectedDate, 
                    month: action.month
                },
                ...state.slice(index +1)
            ]
            : [ ...state,
                {
                    accountId: action.accountId,    
                    id: action.id, 
                    title: 'misc', 
                    icon: BubbleChartOutlinedIcon,
                    amount: Number(action.amount), 
                    note: action.note, 
                    selectedDate: action.selectedDate, 
                    month: action.month
                }

            ]
            // return  state.map(e => 
            //     e.id === action.id ? {...e, amount: Number(action.amount), note: action.note, selectedDate: action.selectedDate,accountId: action.accountId, month: action.month} : e) 
        case "ADD_DATE":     
            return  state.map(e => 
                e.id === action.id ? {...e, selectedDate: action.selectedDate} : e)         
        case "ADD_EXP_DETAILS":  
            return  state.map(e => 
                e.id === action.id ? {...e, accountId:action.id, id: action.id,  amount: Number(action.amount), note: action.note, month: action.month } : e)   
        // case "TOGGLE_BUTTON" :
        //     return  state.map(e =>
        //         e.id === action.id ? { ...e, button: !e.button} : e
        //         )      
        default:
            return state
                

   
    }
}
export default expItemsReducer;