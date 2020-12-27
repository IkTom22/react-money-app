import React, {useContext, memo} from 'react';
import useInputState from'../hooks/useInputState';
import {AccountsContext, DispatchContext} from '../contexts/accounts.context';
import {findNames, findAvailableAccounts,findIndTo, findIndFrom} from '../helper/selections';
import {BalanceContext, DispatchBalContext} from '../contexts/balance.context';
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

    const { type, id, name } = props;
    const dispatchAccounts = useContext(DispatchContext);
    const accounts = useContext(AccountsContext);
    const mainBalance = useContext(BalanceContext);
    const dispatch = useContext(DispatchBalContext);

    const accountNames = findNames(accounts);
    accountNames.push(mainBalance.name);

   const availableAccounts = findAvailableAccounts(accountNames, name);

    const [values, handleChange, reset] = useInputState("");
    const [value, setValue] = React.useState(availableAccounts[0]);
    const [inputValue, setInputValue] = React.useState('');
    const classes = useStyles();

    let accountTo= findIndTo(accounts,  value);
    let accountFrom = findIndFrom(accounts, id);

    console.log(accountFrom)
    ValidatorForm.addValidationRule('isFundsSufficient', (value, type) => 
        !accountFrom
            ? value <= Number(mainBalance.remaining)
            : value <= Number(accountFrom.total)  
    );
    return(
        <ValidatorForm
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                if(type==="main") {
                    dispatchAccounts({ 
                        type: "TRANSFER_IN", 
                        id: accountTo.id, 
                        amount: values.amount
                    });
                    dispatch({
                        type:"TRANSFER_OUT",
                        amount: values.amount
                    })
                } else if (type==="account" && inputValue === mainBalance.name ){

                   dispatchAccounts({
                        type: "TRANSFER_OUT",
                        id: accountFrom.id,
                        amount: values.amount
                    });
                    dispatch({
                        type:"TRANSFER_IN",
                        amount: values.amount
                    })
                } else {
                    dispatchAccounts({
                        type: "TRANSFER_IN",
                        id: accountTo.id,
                        amount: values.amount
                    });
                    dispatchAccounts({
                        type: "TRANSFER_OUT",
                        id: accountFrom.id,
                        amount: values.amount
                    })

                }
                reset();
                props.handleClose();
              }}
        >
            <Typography variant="subtitle1" className={classes.title} color='primary'> 
              {name}
            </Typography>  
            <Typography variant="subtitle1" className={classes.title} color='primary'> 
            {type==="main" && `Available Funds $ ${mainBalance.remaining}`} 
            {type==="account" && `Available Funds $ ${accountFrom.total}` }
            </Typography>  
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
                    options={availableAccounts}
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