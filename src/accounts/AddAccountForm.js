import React, {useContext} from 'react';
import useInputState from'../hooks/useInputState';
import {DispatchContext} from '../contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

 
function AddAccountForm(props){
    const [values, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext);
    const classes = useStyles();
    return(
        <form 
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "ADD", id: uuidv4(), name: values.name, amount: 0})
                reset();
                props.handleClose();
              }}
        >
            <TextField 
                id="standard-required"
                value={values.name}
                onChange={handleChange('name')} 
                label="Account Name" 
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
export default AddAccountForm;
