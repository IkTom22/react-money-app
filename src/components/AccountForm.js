import React, {useContext, memo } from 'react';
import useInputState from'../hooks/useInputState';
import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';
import Categories from './Categories';
import {DispatchBalContext, BalanceContext} from '../contexts/balance.context';
import {DispatchIncsContext, incItemsContext} from '../contexts/inc/incItems.context';
import { DispatchExpsContext, expItemsContext} from '../contexts/exp/expItems.context';
import { AccountsContext, DispatchContext } from '../contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
import {month} from '../helper/datePicker';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
//import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
import deepPurple from '@material-ui/core/colors/deepPurple';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import Calender from './Calender';
// import { BottomNavigationAction } from '@material-ui/core';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

//const buttonInc = cyan['A700'];
const buttonInc = deepPurple['A700'];
const buttonExp = red['A200'];
// const now = moment().format('Do MMM YYYY');
// console.log(now)
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 'auto',
    overflowY: 'auto',
    width: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme
      .spacing(3)}px`,
  
      '& > *': {
        margin: theme.spacing(2),
        
      }
    },
    margin: {
      margin: theme.spacing(1),
    },
    doneIcon: {
    width: "3rem",
    height: "3rem"
    },

    picked: {
      height: '40px',
      width: '40px',
      '& > *': {
        transform: 'scale(1.2)',
        padding: '4px'
      }
  },

}));




const AccountForm = memo((props) => {
    const [values, handleChange] = useInputState("");
    const mainBalance = useContext(BalanceContext);
    const dispatch = useContext(DispatchBalContext);
    const dispatchIncs = useContext(DispatchIncsContext);
    const incItems = useContext(incItemsContext);
    const expItems = useContext(expItemsContext);
    const dispatchExps = useContext(DispatchExpsContext);
    const accounts = useContext(AccountsContext);
    const dispatchAccount= useContext(DispatchContext);

    const accountNames = accounts.map(a=> a.name);
    accountNames.push(mainBalance.name);
    const classes = useStyles();

    const {type, id,  handleClose} = props;
    const [value, setValue] = React.useState(accountNames[0]);

    const [inputValue, setInputValue] = React.useState('');
    const accountName = accounts.findIndex((a) => a.name=== value );
    
    let accountIndex = accounts[accountName];
  
    const indexInc = incItems.findIndex(e => e.id === id);
    const indexExp= expItems.findIndex(e => e.id === id);
 
    let pickedIcon = incItems[indexInc];
    let pickedIconExp = expItems[indexExp]
    pickedIcon && console.log(pickedIcon)


    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
   // console.log(selectedDate)
   
    
    return(
        <form
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                if(type==="inc" && inputValue === mainBalance.name ) {
                  dispatchIncs({
                      type: "ADD_DETAILS", 
                      id: id,
                      amount: values.amount,  
                      note: values.note,
                      selectedDate:  selectedDate,
                      month: month(selectedDate)
                    })
                    
                  dispatch({type: "ADD_INC", inc: values.amount}) 

                } else if (type==="inc" && inputValue !== mainBalance.name ){
                  dispatchIncs({
                    type: "ADD_DETAILS", 
                    id: id,
                    amount: values.amount,  
                    note: values.note,
                    selectedDate:  selectedDate,
                    month: month(selectedDate)
                  })
                  dispatch({
                    type: "ADD_INC_INFO_ONLY",
                    inc: values.amount
                    }) 
                  dispatchAccount({
                    type: "TRANSFER_IN",
                    amount: values.amount,
                    id: accountIndex.id
                  }) } else if(type ==="exp") {
                  dispatchExps({
                    type: "ADD_DETAILS", 
                    accountId: accountIndex.id,
                    id: id,
                    amount: values.amount,  
                    note: values.note,
                    selectedDate:  selectedDate,
                    month: month(selectedDate)
                  })
                  dispatch({type: "MINUS_EXP", exp: values.amount})
                  dispatchAccount({
                    type: "SPENT", 
                    accountId: accountIndex.id, 
                    amount: values.amount
                  })

                }
                handleClose();
                
              }}
        >   
            
            <Categories  id={id} type={type}  />
        
            <div>
                      
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
                    renderInput={(params) => <TextField {...params} label="Choose an account" variant="outlined" />}
                  />
            </div>
            
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item className={classes.picked} >
                    
                  {pickedIcon 
                    && <pickedIcon.icon 
                          fontsize='small'
                          style={{
                                  backgroundColor: pickedIcon.backgroundColor,
                                  borderRadius: '50%',
                                  color: 'black'
                                }} 
                          
                    />}
                    {pickedIconExp 
                      && <pickedIconExp.icon 
                            fontsize='small'
                            style={{
                                    backgroundColor: pickedIconExp.backgroundColor,
                                    borderRadius: '50%',
                                    color: 'white'
                                  }} 
                            
                        />}
                </Grid>
                <Grid item>
                  <TextField 
                    id="standard-number-required"
                    value={values.amount}
                    onChange={handleChange('amount')} 
                    label={(props.type==="inc") ? "Add Income" : "Add Expense"}
                    required
                    type="number"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
            <Calender 
                id={id} 
                type={type} 
                handleChange={handleChange} 
                values={values} selectedDate={selectedDate}  
                handleDateChange={handleDateChange}
              />
              
            <TextField 
                id="standard-basic"
                value={values.note}
                onChange={handleChange('note')} 
                label="Memo"
                fullWidth
            />
            <Grid container justify="space-between" style={{width: "35%"}}>
              <Fab 
                size="small" 
                color="secondary" 
                aria-label="add" 
                className={classes.doneIcon}
                type="submit"
                style={{backgroundColor: type==='inc' ? buttonInc : buttonExp }}
              >
                <DoneIcon />
              </Fab>
              <Fab 
                size="small" 
                color="secondary" 
                aria-label="add" 
                className={classes.doneIcon}
                onClick={handleClose}
                style={{backgroundColor: type==='inc' ? buttonInc : buttonExp }}
              >
                <ExitToAppTwoToneIcon />
              </Fab>
            </Grid>
            
      </form>
    )
})
export default AccountForm;
