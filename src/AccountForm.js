import React, {useContext, useState} from 'react';
import useInputState from'./hooks/useInputState';
import Categories from './Categories';
import {DispatchBalContext} from './contexts/balance.context';
import {DispatchIncsContext} from './contexts/inc/incItems.context';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import AddAccount from './balance/BalanceEdit';
import { v4 as uuidv4 } from 'uuid';
import ActionButtonHoler from './ActionButtonsHolder';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
    width: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme
      .spacing(3)}px`,
  
    '& > *': {
      margin: theme.spacing(2),
      
    },
 doneIcon: {
    width: "3rem",
    height: "3rem",

    
    }
   
  },
}));

const newId = uuidv4();
function AccountForm(props){
    const [values, handleChange, handleClick, reset] = useInputState("");
    const dispatch = useContext(DispatchBalContext);
    const dispatchIncs = useContext(DispatchIncsContext);
    const classes = useStyles();
   
    return(
        <form
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                if(props.type==="inc")
                  dispatchIncs({
                      type: "ADD_DETAILS", 
                      id: newId, 
                      amount: values.amount,  
                      note: values.note
                      
                    })
                    
                  dispatch({type: "ADD_INC", inc: values.amount}) 
                  // reset();
                
                props.handleClose();
                
              }}
        >
            <Categories id={newId}  type={props.type}/>
             
            <TextField 
                id="standard-number-required"
                value={values.amount}
                onChange={handleChange('amount')} 
                label={(props.type==="inc") && "Add Income" }
                required
                fullWidth
            />
            <TextField 
                id="standard-basic"
                value={values.note}
                onChange={handleChange('note')} 
                label="Memo"
                fullWidth
            />
            <Fab 
                size="small" 
                color="secondary" 
                aria-label="add" 
                className={classes.doneIcon}
                type="submit">
                <DoneIcon />
            </Fab>
        </form>
    )
}
export default AccountForm;
