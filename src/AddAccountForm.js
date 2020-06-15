import React, {useContext} from 'react';
import useInputState from'./hooks/useInputState';
import {DispatchContext} from './contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
 addIcon: {
    width: "3rem",
    height: "3rem",

    
    }
   
  },
}));

 
function AddAccountForm(props){
    const [value, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext);
    const classes = useStyles();
    return(
        <form 
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "ADD", name: value, amount: 0})
                reset();
                props.handleClose();
              }}
        >
            <TextField 
                value={value}
                onChange={handleChange} 
                label="Account Name" 
                fullWidth
            />
            <Fab 
                size="small" 
                color="secondary" 
                aria-label="add" 
                className={classes.addIcon}
                type="submit">
                <AddIcon />
            </Fab>
        </form>
    )
}
export default AddAccountForm;