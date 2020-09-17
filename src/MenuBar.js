import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {month} from './helper/datePicker';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import yellow from '@material-ui/core/colors/yellow';
const moneyPrimary = yellow[400];
const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      backgroundColor: moneyPrimary,
      boxShadow: 'none',
      paddingTop: '0.5rem',
      '& >*': {
        color: 'black'
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      
    },
    title: {
      flexGrow: 1,
    }

  }));
function MenuBar(){
    const classes = useStyles();
    // const month = new Date().getMonth()
    // const monthName=['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <SortIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  {month(new Date())}
                </Typography>
                <IconButton >
                  <MoreVertIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar;