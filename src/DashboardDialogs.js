import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DashboardLists from './DashboardLists';
import {BalanceContext} from './contexts/balance.context';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles= makeStyles((theme) => ({
    root: {
      height: "auto",
    //   backgroundColor: moneyPrimary,
      height: '100vh'
      
    },
    grid: {
      gap: theme.spacing(2),
    //   backgroundColor: moneyPrimary,
    },
    
    title:{
        fontSize:"1.5rem",
        fontWeight: 400
    },
    subTitle:{
        fontSize:"1rem",
        color: 'black'
    },
    details:{
        padding: 0,
        '& a':{
            textDecoration: "none"
            },
        }
    
  }))

  const Transition = React.forwardRef(function Transition(props, ref, type) {
    return <Slide direction= {type ==="exp" ? "right" : "left"} ref={ref} {...props} />;
  });
  
function DashboardDialogs(props){
    const {type, handleClose, open} = props;
    const classes = useStyles();
    const balance = useContext(BalanceContext);
    console.log(type)

 

     return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <Grid container justify='center' direction="column" alignItems="center">
       
                <Paper elevation={3} style={{ marginTop: "2rem", width: "90%"}}>
                    <Grid 
                            style={{ textAlign: "center", marginTop:"1rem"}} 
                            container 
                            direction="column" 
                            spacing={2} 
                            wrap='nowrap' 
                            justify="center" 
                            alignItems="center"
                        >
                        <List>
                            <div className={classes.subTitle}>
                            {type === "exp" ? 'Expenses' : 'Income'}
                            </div>
                            
                            <div className={classes.title} >   
                                { type === "exp" ? `$ ${balance.exp}`:`$ ${balance.inc}` } 
                            </div>
                        </List>
                    </Grid>
                </Paper>
                <Grid container style={{ marginTop: "1.5rem", width: "90%"}}>
                    
                        <DashboardLists type={type}/>
                   
                </Grid>
                
        </Grid>
        </Dialog>
    )
}

export default DashboardDialogs;