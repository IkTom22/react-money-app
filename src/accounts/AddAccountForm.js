import React, {useContext} from 'react';
import useInputState from'../hooks/useInputState';
import {AccountsContext, DispatchContext} from '../contexts/accounts.context';

import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
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
    const accounts = useContext(AccountsContext);
    const classes = useStyles();
    ValidatorForm.addValidationRule('isAccounteNameUnique', value => 
    accounts.every(
    ({name}) => name !== value
    )
  );
    return(
        <ValidatorForm
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "ADD", id: uuidv4(), name: values.name, amount: 0})
                reset();
                props.handleClose();
              }}
        >
            <TextValidator
                id="standard-required"
                value={values.name}
                onChange={handleChange('name')} 
                label="Account Name" 
                required
                fullWidth
                validators={["required", "isAccounteNameUnique"]}
                errorMessages={["Enter Account Name", "Name already used"]}
            />
            <Fab 
                size="small" 
                color="secondary" 
                aria-label="add" 
                className={classes.doneIcon}
                type="submit">
                <DoneIcon />
            </Fab>
        </ValidatorForm>
    )
}
export default AddAccountForm;
