import React from 'react';
import{month} from '../../helper/datePicker';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ExpTotal from '../expense/ExpTotal';
import IncTotal from '../income/IncTotal';

function BalanceShot(props){

    let currentMonth = month(new Date())

    return (
        <Grid container spacing={2} wrap='nowrap' style={{marginTop:"1rem"}}>
                <IncTotal type="inc" currentMonth={currentMonth}/>
                <Divider 
                    orientation="vertical" 
                    flexItem
                    style={{backgroundColor: "rgba(0,0,0, 0.3)"}}
                />
                <ExpTotal  currentMonth={currentMonth}/>
                
            </Grid>
    )
}

export default BalanceShot;