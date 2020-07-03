import React, {useContext, useState} from 'react';
import useInputState from'./hooks/useInputState';
import Categories from './Categories';
import {DispatchBalContext} from './contexts/balance.context';
import {DispatchIncsContext, incItemsContext} from './contexts/inc/incItems.context';
import { makeStyles } from '@material-ui/core/styles';
import BudgetIcons from './BudgetIcons';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import cyan from '@material-ui/core/colors/cyan';

const buttonInc = cyan['A100'];

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
    height: "3rem",

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
    const classes = useStyles();
    const {incs, exps} = BudgetIcons; 
    const {type, id} = props;
    
    const index = incItems.findIndex(e => e.id === id);
    let pickedIcon = incItems[index]
    pickedIcon && console.log(pickedIcon.backgroundColor)
    return(
        <form
            className={classes.root} 
            onSubmit={e => {
                e.preventDefault();
                if(type==="inc")
                  dispatchIncs({
                      type: "ADD_DETAILS", 
                      id: id,
                      amount: values.amount,  
                      note: values.note 
                    })
                    
                  dispatch({type: "ADD_INC", inc: values.amount}) 
                
                props.handleClose();
                
              }}
        >
            <Categories  id={id} type={type} />
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item className={classes.picked}>
                  {pickedIcon 
                    && <pickedIcon.icon 
                          fontsize='small'
                          style={{
                                  backgroundColor: pickedIcon.backgroundColor,
                                  borderRadius: '50%'
                                }} 
                          
                        />}
                </Grid>
                <Grid item>
                  <TextField 
                    id="standard-number-required"
                    value={values.amount}
                    onChange={handleChange('amount')} 
                    label={(props.type==="inc") && "Add Income" }
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
                type="submit">
                <DoneIcon />
            </Fab>
      </form>
    )
}
export default AccountForm;
