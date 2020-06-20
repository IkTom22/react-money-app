import React, {useContext} from 'react';
import EditBalance from './EditBalance';
import {withStyles} from '@material-ui/core/styles';
import {BalanceContext} from '../contexts/balance.context';
import styles from '../styles/BalanceStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import Divider from '@material-ui/core/Divider';


function Balance(props){
    const {classes} = props;
    const balance = useContext(BalanceContext);
     console.log(balance)
    return(
        <Paper elevation={3} className={classes.root} style={{ marginTop: "2rem", width: "90%"}}>
            
            <List>
                <Grid 
                    style={{ textAlign: "center", marginTop:"1rem"}} 
                    container direction="column" 
                    spacing={2} wrap='nowrap' 
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
            <Grid container spacing={2} wrap='nowrap' style={{marginTop:"1rem"}}>
                <Grid item xs={6} className={classes.details}>
                    <div className={classes.subTitle}>Income</div>
                    <div className={classes.title}>${balance.inc}</div>
                </Grid>
                <Divider 
                    orientation="vertical" 
                    flexItem
                    style={{backgroundColor: "rgba(0,0,0, 0.3)"}}
                />
                <Grid item xs={6}  className={classes.details}>
                    <div className={classes.subTitle}>Expense</div>
                    <div className={classes.title}>${balance.exp}</div>
                </Grid>
                
            </Grid>

        </Paper>
    )
}
export default withStyles(styles)(Balance);
