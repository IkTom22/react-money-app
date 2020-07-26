import React, {useContext, memo} from 'react';
import useInputState from'./hooks/useInputState';
import {AccountsContext, DispatchContext} from './contexts/accounts.context';
import {BalanceContext, DispatchBalContext} from './contexts/balance.context';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
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
    title :{
        textAlign: 'center',
        
    },
    doneIcon: {
        width: "3rem",
        height: "3rem",
    
    },

  },
}));

 
const TransferForm= memo((props) => {
    const [values, handleChange, reset] = useInputState("");
    const dispatchAccounts = useContext(DispatchContext);
    const accounts = useContext(AccountsContext);
    const mainBalance = useContext(BalanceContext);
    const dispatch = useContext(DispatchBalContext);

    const accountNames = accounts.map(a=> a.name);
    const [value, setValue] = React.useState(accountNames[0]);
    const [inputValue, setInputValue] = React.useState('');

    const classes = useStyles();
  
    let accountIndex = accounts.findIndex(e => e.name === value);
    
    let account = accounts[accountIndex]
   
    
   console.log(mainBalance.remaining)
    ValidatorForm.addValidationRule('isFundsSufficient', value => 
           value <= mainBalance.remaining
    );
    return(
        <ValidatorForm
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                dispatchAccounts({ 
                    type: "TRANSFER_IN", 
                    id: account.id, 
                    amount: values.amount
                });
                dispatch({
                    type:"TRANSFER_OUT",
                    amount: values.amount
                })
                reset();
                props.handleClose();
              }}
        >
        <Typography variant="subtitle1" className={classes.title} color='primary'> {`Available Funds $ ${mainBalance.remaining}`}</Typography>  
            <div>
               
                <br />
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={accountNames}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Allocate Funds To" variant="outlined" />}
                />
            </div>
            <TextValidator
                id="standard-required"
                value={values.amount}
                onChange={handleChange('amount')} 
                label="amount" 
                required
                fullWidth
                validators={["required", "isFundsSufficient"]}
                errorMessages={["Enter Amount", "dekimasenn"]}
            />
            <Fab 
                size="small" 
                color="secondary" 
                aria-label="done" 
                className={classes.doneIcon}
                type="submit">
                <DoneIcon />
            </Fab>
        </ValidatorForm>
    )
})
export default TransferForm;