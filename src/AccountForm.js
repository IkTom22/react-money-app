import React, {useContext, useState} from 'react';
import useInputState from'./hooks/useInputState';
import Categories from './Categories';
import {DispatchBalContext} from './contexts/balance.context';
import {DispatchIncsContext, incItemsContext} from './contexts/inc/incItems.context';
import { DispatchExpsContext, expItemsContext} from './contexts/exp/expItems.context';
import { AccountsContext } from './contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
import BudgetIcons from './BudgetIcons';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
import deepPurple from '@material-ui/core/colors/deepPurple';

//const buttonInc = cyan['A700'];
const buttonInc = deepPurple['A700'];
const buttonExp = red['A200'];


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




function AccountForm(props){
    const [values, handleChange] = useInputState("");
    const dispatch = useContext(DispatchBalContext);
    const dispatchIncs = useContext(DispatchIncsContext);
    const incItems = useContext(incItemsContext);
    const expItems = useContext(expItemsContext);
    const dispatchExps = useContext(DispatchExpsContext);

    const accounts = useContext(AccountsContext);
    const accountNames = accounts.map(a=> a.name);

    const classes = useStyles();
    //const {incs, exps} = BudgetIcons; 
    const {type, id} = props;
    
    
    const [value, setValue] = React.useState(accountNames[0]);

    const [inputValue, setInputValue] = React.useState('');
    const accountId = accounts.filter((a) => a.name === inputValue && a.id );
    const indexInc = incItems.findIndex(e => e.id === id);
    const indexExp= expItems.findIndex(e => e.id === id);

    let pickedIcon = incItems[indexInc];
    let pickedIconExp = expItems[indexExp]
    pickedIcon && console.log(pickedIcon.icon)
    return(
        <form
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                if(type==="inc") {
                  dispatchIncs({
                      type: "ADD_DETAILS", 
                      id: id,
                      amount: values.amount,  
                      note: values.note 
                    })
                    
                  dispatch({type: "ADD_INC", inc: values.amount}) 
                } else if(type ==="exp") {
                  dispatchExps({
                    type: "ADD_EXP_DETAILS", 
                    accountId: accountId,
                    id: id,
                    amount: values.amount,  
                    note: values.note 
                  })
                  dispatch({type: "MINUS_EXP", exp: values.amount})
                }
                props.handleClose();
                
              }}
        >
            <Categories  id={id} type={type} />
            {type==="exp" 
              &&  <div>
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
                        renderInput={(params) => <TextField {...params} label="Choose an account" variant="outlined" />}
                      />
                </div>
              }
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item className={classes.picked}>
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
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
              
              
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
                type="submit"
                style={{backgroundColor: type==='inc' ? buttonInc : buttonExp }}
            >
                
                <DoneIcon />
            </Fab>
      </form>
    )
}
export default AccountForm;
