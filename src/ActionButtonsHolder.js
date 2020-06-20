import React from 'react';
import AddAccount from './accounts/AddAccount';
import AddIncome from './AddIncome';
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles';

function ActionButtonHoler(){
    return(
        <Grid container spacing={2} wrap='nowrap'>
            <AddIncome />
            <AddAccount />
        </Grid>
    )
}
export default ActionButtonHoler;