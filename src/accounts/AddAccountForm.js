import React, {useContext} from 'react';
import useInputState from'../hooks/useInputState';
import {AccountsContext, DispatchContext} from '../contexts/accounts.context';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import {BalanceContext, DispatchBalContext} from '../contexts/balance.context';

import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import TransferMoney from '../TransferMoney';
import TransferForm from '../TransferForm';

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
    const dispatchAccounts = useContext(DispatchContext);
    const accounts = useContext(AccountsContext);
    const classes = useStyles();
    const accountNames = accounts.map(a=> a.name);
    const [value, setValue] = React.useState(accountNames[0]);
    const [inputValue, setInputValue] = React.useState('');

    const mainBalance = useContext(BalanceContext);
    const dispatch = useContext(DispatchBalContext);
  
    let accountIndex = accounts.findIndex(e => e.name === value);
    
    let account = accounts[accountIndex]
    ValidatorForm.addValidationRule('isAccounteNameUnique', value => 
      accounts.every(
      ({name}) => name !== value
      )
    );
    ValidatorForm.addValidationRule('isTypeNumber', value =>
      value !== Number
    ) 
    ValidatorForm.addValidationRule('isFundsSufficient', value => 
           value <= mainBalance.remaining
    );   
    return(
        <ValidatorForm
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                dispatchAccounts({type: "ADD", id: uuidv4(), name: values.name, amount: values.amount, goal: values.goal})
                dispatch({
                  type:"TRANSFER_OUT",
                  amount: values.amount
              })
                
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
            <TextValidator
                id="outlined-number"
                label="Savings Goal"
                type="number"
                validators={['isTypeNumber']}
                errorMessages={["Enter amount"]}
                value={values.goal}
                onChange={handleChange('goal')} 
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Typography variant="subtitle1" className={classes.title} color='primary'> {`Available Funds $ ${mainBalance.remaining}`}</Typography>  
            <TextValidator
                id="outlined-number"
                type="number"
                value={values.amount}
                onChange={handleChange('amount')} 
                label="allocate funds" 
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                validators={["isTypeNumber", "isFundsSufficient"]}
                errorMessages={["Enter amount", "exceeds available funds"]}
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
