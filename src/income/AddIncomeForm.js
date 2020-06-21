import React, {useContext} from 'react';
import useInputState from'../hooks/useInputState';
import {DispatchBalContext} from '../contexts/balance.context';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';

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

 
function AddIncomeForm(props){
    const [value, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchBalContext);
    const classes = useStyles();
    return(
        <form 
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "ADD_INC", inc: parseFloat(value)})
                reset();
                props.handleClose();
              }}
        >
            <TextField 
                value={value}
                onChange={handleChange} 
                label="Add Income" 
                required
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
export default AddIncomeForm;
