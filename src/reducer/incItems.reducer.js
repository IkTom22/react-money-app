import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';

const incItemsReducer = (state, action)=>{
    console.log(state)
    
    const index = state.findIndex(e=> e.id === action.id )
    switch(action.type){
        

        case "ADD_TYPE":
            return state[index] 
                        ? [...state.slice(0, index),
                            {
                                ...state[index],  
                                title: action.titl,
                                icon: action.icon, 
                                backgroundColor: action.backgroundColor, 
                                // selectedDate: action.selectedDate,
                                // month: action.month
                            },
                            ...state.slice(index +1)
                        ] 
                        : [...state,
                                {
                                    accountId: action.accountId,
                                    id: action.id, 
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
                            

        default:
            return state
                

   
    }
}
export default incItemsReducer;