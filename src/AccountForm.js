import React, {useContext, useState} from 'react';
import useInputState from'./hooks/useInputState';
import IncCategories from './income/IncCategories';
import {DispatchBalContext} from './contexts/balance.context';
import {DispatchIncsContext} from './contexts/inc/incItems.context';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import AddAccount from './balance/BalanceEdit';
import { v4 as uuidv4 } from 'uuid';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  
    '& > *': {
      margin: theme.spacing(2),
      
    },
 doneIcon: {
    width: "3rem",
    height: "3rem",

    
    }
   
  },
}));

 
function AccountForm(props){
    const [values, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchBalContext);
    const dispatchIncs = useContext(DispatchIncsContext);
    const classes = useStyles();


    return(
        <form 
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                if(props.type==="inc")
                  dispatch({type: "ADD_INC", inc: values.amount}) 
                  dispatchIncs({id: uuidv4(), amount: values.amount, category: values.category })
                    
                reset();
                props.handleClose();
              }}
        >
            <IncCategories />
             
            <TextField 
                id= "standard-required"
                value={values.amount}
                onChange={handleChange} 
                label={(props.type==="inc") && "Add Income" }
                required
                fullWidth
            />
            <TextField 
                id= {(props.type==="inc") && "inc-category"}
                value={values.category}
                onChange={handleChange} 
                label="Add category"
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
