import React, {useContext} from 'react';
import {BalanceContext} from '../contexts/balance.context';
import EditBalance from './EditBalance';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/BalanceStyles';

function Balance(props){
    const {classes} = props;
    const balance = useContext(BalanceContext);
    return (
        <List>
        
        <Grid 
            style={{ textAlign: "center", marginTop:"1rem"}} 
            container direction="column" 
            spacing={2} 
            wrap='nowrap' 
            justify="center" 
            alignItems="center"
        >
            <div className={classes.subTitle}>
                Balance   
            </div>
            
            <div className={classes.title} >   
                {`$ ${balance.mainAccount}`} 
            </div>
        
        </Grid>
        <EditBalance /> 
        </List>
    )
}
export default withStyles(styles)(Balance);